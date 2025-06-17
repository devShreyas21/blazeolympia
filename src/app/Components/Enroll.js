'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Enroll({ sportName, venues, amount, onClose }) {
    const router = useRouter();
    

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
                    setShowModal(false);
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
        <>

            <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header">
                            <h5 className="modal-title">Enroll for {sportName} Coaching</h5>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
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
                                    <label className="form-label">Address</label>
                                    <input name="address" className="form-control" onChange={handleChange} placeholder="Enter your address" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Month</label>
                                    <input name="month" className="form-control" onChange={handleChange} placeholder="e.g., June 2025" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Venue</label>
                                    <select name="venue_name" className="form-select" onChange={handleChange} required>
                                        <option value="">Select Venue</option>
                                        {venues.map((venue, index) => (
                                            <option key={index} value={venue}>{venue}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Desired Start Date</label>
                                    <input type="date" name="desired_start_date" className="form-control" onChange={handleChange} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Sport</label>
                                    <input name="sports_name" className="form-control" value={form.sports_name} readOnly />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Amount (₹)</label>
                                    <input type="number" name="amount" className="form-control" value={form.amount} onChange={handleChange} />
                                </div>

                                <div className="d-grid">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={handlePayment}>
                                        Enroll Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
