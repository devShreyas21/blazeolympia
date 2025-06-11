'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Enroll({ sportName, venues, amount }) {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        month: "",
        sports_name: sportName || "",
        venue_name: "",
        amount: amount || 1000,
        desired_start_date: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlePayment = async () => {
        const orderRes = await fetch("/api/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: form.amount }),
        });

        if (!orderRes.ok) {
            alert("Failed to create Razorpay order");
            return;
        }

        const order = await orderRes.json();

        const options = {
            key: 'rzp_test_K2K20arHghyhnD',
            amount: order.amount,
            currency: order.currency,
            name: "Coaching Enrollment",
            description: `Enrollment for ${form.sports_name}`,
            order_id: order.id,
            handler: async (response) => {
                const enrollRes = await fetch("/api/enroll-coaching", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...form,
                        payment_date: new Date().toISOString().split("T")[0],
                        payment_time: new Date().toLocaleTimeString('en-GB'),
                        payment_status: "Completed",
                        payment_id: response.razorpay_payment_id,
                    }),
                });

                const result = await enrollRes.json();
                if (result.success) {
                    setShowModal(true);
                    router.push('/');
                } else {
                    alert("Error saving enrollment.");
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
        <div style={{ marginTop: "5%" }}>
            <h2>Enroll for {sportName} Coaching</h2>
            <input name="name" placeholder="Name" onChange={handleChange} /><br />
            <input name="email" placeholder="Email" onChange={handleChange} /><br />
            <input name="phone" placeholder="Phone" onChange={handleChange} /><br />
            <input name="address" placeholder="Address" onChange={handleChange} /><br />
            <input name="month" placeholder="Month (e.g., June 2025)" onChange={handleChange} /><br />
            <select name="venue_name" onChange={handleChange} required>
                <option value="">Select Venue</option>
                {venues.map((venue, index) => (
                    <option key={index} value={venue}>{venue}</option>
                ))}
            </select><br />
            <input type="date" name="desired_start_date" onChange={handleChange} /><br />
            <input name="sports_name" placeholder="Sport" value={form.sports_name} readOnly /><br />
            <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} /><br />
            <button onClick={handlePayment}>Enroll Now</button>

            {showModal && (
                <div style={modalOverlayStyle}>
                    <div style={modalContentStyle}>
                        <h2>✅ Enrollment Successful</h2>
                        <p>You have successfully paid and enrolled for coaching.</p>
                        <button onClick={() => setShowModal(false)} style={closeButtonStyle}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

// Styles
const modalOverlayStyle = {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 9999,
};

const modalContentStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "90%",
    width: "400px",
};

const closeButtonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#3399cc",
    color: "white",
    border: "none",
    cursor: "pointer",
};
