'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Book({ sportName, venues, amount }) {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        court_name: "",
        booking_date: "",
        booking_time: "",
        sports: sportName || "",
        amount: amount || 500,
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
            description: `Booking for ${form.sports}`,
            order_id: order.id,
            handler: async (response) => {
                const bookingRes = await fetch("/api/submit-booking", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...form, payment_id: response.razorpay_payment_id }),
                });

                const result = await bookingRes.json();
                if (result.success) {
                    setShowModal(true);
                    router.push('/');
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
        <div className="container mt-5">
            <div className=" p-4 mx-auto" style={{ maxWidth: '600px' }}>
                <h2 className="text-center mb-4">Book Your {sportName}</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input name="name" className="form-control" onChange={handleChange} placeholder="Enter your name" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" onChange={handleChange} placeholder="Enter your email" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="tel" name="phone" className="form-control" onChange={handleChange} placeholder="Enter your phone number" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Venue</label>
                        <select name="court_name" className="form-select" onChange={handleChange} required>
                            <option value="">Select Venue</option>
                            {venues.map((venue, index) => (
                                <option key={index} value={venue}>{venue}</option>
                            ))}
                        </select>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label">Booking Date</label>
                            <input type="date" name="booking_date" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Booking Time</label>
                            <input type="time" name="booking_time" className="form-control" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Sport</label>
                        <input name="sports" className="form-control" value={form.sports} readOnly />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Amount (₹)</label>
                        <input type="number" name="amount" className="form-control" value={form.amount} onChange={handleChange} />
                    </div>

                    <div className="d-grid">
                        <button type="button" className="btn btn-primary btn-lg" onClick={handlePayment}>
                            Book the Court
                        </button>
                    </div>
                </form>
            </div>

            {showModal && (
                <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content text-center">
                            <div className="modal-header">
                                <h5 className="modal-title">✅ Booking Successful</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>You have successfully paid and booked your court.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={() => setShowModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
