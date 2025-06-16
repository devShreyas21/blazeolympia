'use client'
import React, { useState } from 'react';
import Book from './Book';
import Enroll from './Enroll';
import { venueSportsData } from '../sportsData';

export default function SportsPopup({ venueName, onClose }) {
    const [selected, setSelected] = useState(null);
    const venueData = venueSportsData[venueName];

    // Fallback in case data is missing or misconfigured
    if (!venueData) return null;

    const sports = venueData.sports || [];

    const handleAction = (type, sport) => {
        setSelected({ type, sport });
    };

    const renderForm = () => {
        const props = {
            sportName: selected.sport.name,
            venues: [venueName],
            amount: selected.type === 'book' ? selected.sport.bookingFee : selected.sport.coachingFee
        };

        return selected.type === 'book' ? <Book {...props} /> : <Enroll {...props} />;
    };

    if (selected) return (
        <div className="modal d-block" style={{ background: 'rgba(0,0,0,0.8)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content p-4">
                    <button className="btn-close" onClick={() => setSelected(null)}></button>
                    {renderForm()}
                </div>
            </div>
        </div>
    );

    return (
        <div className="modal d-block" style={{ background: 'rgba(0,0,0,0.8)' }}>
            <div className="modal-dialog modal-fullscreen-sm-down modal-xl modal-dialog-centered">
                <div className="modal-content p-4">
                    <img
                        src={venueData.bannerImage}
                        alt={`${venueName} Banner`}
                        className="img-fluid w-100 rounded-top"
                        style={{ maxHeight: '250px', objectFit: 'cover' }}
                    />

                    <div className="modal-header">
                        <h5 className="modal-title">Sports at {venueName}</h5>
                        <button className="btn-close" onClick={onClose}></button>
                    </div>

                    <div className="modal-body row">
                        {sports.map((sport, index) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={index}>
                                <div className="card h-100 shadow">
                                    <img src={sport.image} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} alt={sport.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">🏀 {sport.name}</h5>
                                        <p><strong>Available at:</strong> {venueName}</p>
                                        <p><strong>Coach:</strong> {sport.coach} | ₹{sport.coachingFee}/month</p>
                                        <p><strong>Booking:</strong> ₹{sport.bookingFee} for 2 hours</p>
                                        <p>{sport.description}</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <button className="btn btn-primary" onClick={() => handleAction('book', sport)}>Book Court</button>
                                        <button className="btn btn-outline-primary" onClick={() => handleAction('enroll', sport)}>Enroll for Coaching</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
