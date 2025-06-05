'use client'
import React, { useState } from "react";

export default function Page() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        court_name: "",
        booking_date: "",
        booking_time: "",
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handlePayment = async () => {
        const orderRes = await fetch("/api/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: 500 }),
        });

        if (!orderRes.ok) {
            const errorText = await orderRes.text();
            console.error("Create order failed:", errorText);
            alert("Failed to create Razorpay order.");
            return;
        }

        const order = await orderRes.json();

        const options = {
            key: 'rzp_test_K2K20arHghyhnD',
            amount: order.amount,
            currency: order.currency,
            name: "Court Booking",
            description: "Book your slot",
            order_id: order.id,
            handler: async (response) => {
                // Payment successful: now save booking
                const bookingRes = await fetch("/api/submit-booking", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...form, payment_id: response.razorpay_payment_id }),
                });

                const result = await bookingRes.json();
                if (result.success) {
                    alert("Booking Confirmed!");
                } else {
                    alert("Error saving booking.");
                }
            },
            prefill: {
                name: form.name,
                email: form.email,
                contact: form.phone,
            },
            theme: { color: "#3399cc" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div>

            <div style={{ marginTop: "20%" }}>
                <h2>Book Your Court</h2>
                <input name="name" placeholder="Name" onChange={handleChange} /><br />
                <input name="email" placeholder="Email" onChange={handleChange} /><br />
                <input name="phone" placeholder="Phone" onChange={handleChange} /><br />
                <input name="court_name" placeholder="Court Name" onChange={handleChange} /><br />
                <input type="date" name="booking_date" onChange={handleChange} /><br />
                <input type="time" name="booking_time" onChange={handleChange} /><br />
                <button onClick={handlePayment}>Book the Court</button>
            </div>

        </div>
    )
}
