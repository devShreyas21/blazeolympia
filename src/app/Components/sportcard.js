'use client'
import React, { useState } from 'react';
import Book from './Book';
import Enroll from './Enroll';

export default function SportCard({ icon, title, image, coach, bookingPrice, coachingPrice, description }) {
  const [showBooking, setShowBooking] = useState(false);
  const [showEnroll, setShowEnroll] = useState(false);

  const closeBooking = () => setShowBooking(false);
  const closeEnroll = () => setShowEnroll(false);

  return (
    <div className="col-lg-4">
      <article className="position-relative h-100">
        <div className="post-img position-relative overflow-hidden">
          <img src={image} className="img-fluid" alt={title} />
        </div>

        <div className="post-content d-flex flex-column">
          <h3 className="post-title">{icon} {title}</h3>

          <div className="meta d-flex flex-column gap-1">
            <div className="d-flex align-items-center">
              <i className="bi bi-geo-alt"></i>
              <span className="ps-2">Available at: Phoenix Stadium, Star Court</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-person-badge"></i>
              <span className="ps-2">Coach: {coach} | ₹{coachingPrice}/month</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-clock"></i>
              <span className="ps-2">Booking: ₹{bookingPrice} for 2 hours</span>
            </div>
          </div>

          <p>{description}</p>

          <hr />

          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={() => setShowBooking(true)}>Book Court</button>
            <button className="btn btn-outline-primary" onClick={() => setShowEnroll(true)}>Enroll for Coaching</button>
          </div>

          {showBooking && (
            <div className="mt-4">
              <Book sportName={title} venues={['Phoenix Stadium', 'Star Court']} amount={bookingPrice} onClose={closeBooking} />
            </div>
          )}

          {showEnroll && (
            <div className="mt-4">
              <Enroll sportName={title} venues={['Phoenix Stadium', 'Star Court']} amount={coachingPrice} onClose={closeEnroll} />
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
