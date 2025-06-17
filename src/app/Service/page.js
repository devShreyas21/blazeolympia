'use client';
import React, { useState } from 'react'
import Book from '../Components/Book'
import Enroll from '../Components/Enroll'

import { allSports } from '../allSportsFlatData';

export default function Page() {

  const [selectedAction, setSelectedAction] = useState(null);
  const defaultSport = allSports[0];

  const [selectedBookSport, setSelectedBookSport] = useState(allSports[0]);
  const [selectedEnrollSport, setSelectedEnrollSport] = useState(allSports[0]);

  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [showBookForm, setShowBookForm] = useState(false);

  const renderFormModal = () => {
    if (!selectedAction) return null;

    const { type, sport } = selectedAction;
    const FormComponent = type === 'book' ? Book : Enroll;

    return (
      <div className="modal d-block" style={{ background: 'rgba(0,0,0,0.8)' }}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content p-4">
            <button className="btn-close ms-auto" onClick={() => setSelectedAction(null)}></button>
            <FormComponent
              sportName={sport.name}
              venues={[sport.venue]}
              amount={type === 'book' ? sport.bookingFee : sport.coachingFee}
            />
          </div>
        </div>
      </div>
    );
  };


  return (
    <div>

      <div className="page-title dark-background" style={{ backgroundImage: "url(/images/banners/services-banner.jpeg)" }}>
        <div className="container position-relative">
          <h1>Services</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><a href="index.html">Home</a></li>
              <li className="current">Services</li>
            </ol>
          </nav>
        </div>
      </div>


      <section id="services" className="services section light-background">

        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Unlock the Game: Premier Sports Facilities, Elite Events, and Unforgettable Tours!</p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item  position-relative">
                <div className="icon">
                  <i className="fa-solid fa-dumbbell"></i>
                </div>
                <h3>Sports Coaching</h3>
                <p>Unlock your athletic potential with expert-led coaching across multiple sports. Our programs focus on skill-building, discipline, and performance enhancement to shape champions at every level—beginners to advanced.</p>
                <button
                  className="btn btn-outline-primary mt-3"
                  onClick={() => setSelectedAction({ type: 'enroll', sport: defaultSport })}
                >
                  Enroll Now
                </button>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-building-columns"></i>
                </div>
                <h3>Facility Booking</h3>
                <p>Book premium sports venues hassle-free for matches, practice sessions, or personal events. Our streamlined booking system ensures availability, convenience, and top-class infrastructure for individuals, teams, and organizations.</p>
                <button
                  className="btn btn-outline-success mt-3"
                  onClick={() => setSelectedAction({ type: 'book', sport: defaultSport })}
                >
                  Book Now
                </button>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-users-gear"></i>
                </div>
                <h3>Corporate Events</h3>
                <p>Engage your team with high-energy sports events and tournaments tailored for corporate groups. Perfect for team building, employee wellness, and networking—professionally organized at dynamic venues with full support.</p>
                <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-bus-simple"></i>
                </div>
                <h3>Sports Tours</h3>
                <p>Experience curated sports tours that blend competition, travel, and training. Ideal for schools, academies, and clubs—each tour is designed to offer exposure, growth, and unforgettable memories through sports.</p>
                <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

          </div>

        </div>

      </section>

      {showEnrollForm && (
        <div className="container mt-5">
          <h3>Enroll for Coaching</h3>
          <Enroll
            sportName={selectedEnrollSport.name}
            venues={[selectedEnrollSport.venue]}
            amount={selectedEnrollSport.coachingFee}
          />
        </div>
      )}

      {showBookForm && (
        <div className="container mt-5">
          <h3>Book a Facility</h3>
          <Book
            sportName={selectedBookSport.name}
            venues={[selectedBookSport.venue]}
            amount={selectedBookSport.bookingFee}
          />
        </div>
      )}

      {renderFormModal()}

    </div>
  )
}
