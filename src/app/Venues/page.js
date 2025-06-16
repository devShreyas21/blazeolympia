'use client';
import React, { useState } from 'react'
import styles from "../page.module.css";

import SportsPopup from '../Components/SportsPopup';
import { venueSportsData } from '../sportsData';

export default function Page() {

  const [popupVenue, setPopupVenue] = useState(null);

  return (
    <>
      <main className="main">

        {/* <!-- Page Title --> */}
        <div className="page-title dark-background" style={{ backgroundImage: "url('/images/banners/venues-banner.jpeg')" }}>
          <div className="container position-relative">
            <h1>Venues</h1>
            <nav className="breadcrumbs">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li className="current">Venues</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* <!-- End Page Title --> */}


        {/* <!-- Venue Section --> */}
        <section id="features" className="features section">

          <div className="container">

            <ul className="nav nav-tabs row  g-2 d-flex" data-aos="fade-up" data-aos-delay="100" role="tablist">

              <li className="nav-item col-3" role="presentation">
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1" aria-selected="true" role="tab">
                  <h4>Sunny World</h4>
                </a>
              </li>
              {/* <!-- End tab nav item --> */}

              <li className="nav-item col-3" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" aria-selected="false" tabIndex="-1" role="tab">
                  <h4>Yoddha Sports Club</h4>
                </a>
                {/* <!-- End tab nav item --> */}

              </li>
              <li className="nav-item col-3" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3" aria-selected="false" tabIndex="-1" role="tab">
                  <h4>Ranbhumi</h4>
                </a>
              </li>
              {/* <!-- End tab nav item --> */}

              <li className="nav-item col-3" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4" aria-selected="false" tabIndex="-1" role="tab">
                  <h4>Dhruv Academy</h4>
                </a>
              </li>
              {/* <!-- End tab nav item --> */}

            </ul>

            <div className="tab-content" data-aos="fade-up" data-aos-delay="200">

              <div className="tab-pane fade active show" id="features-tab-1" role="tabpanel">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Sunny World</h3>
                    <p className="fst-italic">
                      Strategically located in the heart of the city, Blaze Olympia is a premium multi-sport destination designed for champions at every level. With world-class infrastructure and state-of-the-art facilities, it offers a seamless sporting experience for athletes, amateurs, and corporates alike.
                    </p>
                    <p className="fst-italic">From floodlit arenas and synthetic courts to indoor halls and fitness zones, Blaze Olympia is the perfect venue for hosting high-energy tournaments, intensive training sessions, and competitive leagues. Whether you are booking a single game or planning a full-day sporting event, the venue guarantees convenience, professionalism, and excellence.</p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> <span>Fully equipped indoor & outdoor courts for badminton, football, basketball, and more.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Ideal for daily bookings, sports training programs, school & college competitions.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Professional support staff and clean, secure premises to ensure top-tier experiences.</span></li>
                    </ul>
                    {/* Eye icon and "See All Sports" */}
                    <div className="d-flex justify-content-start align-items-center mb-3">
                      <div className={`${styles.hoverYellow}`} onClick={() => setPopupVenue("Sunny World")}>
                        <i className="bi bi-eye me-2" style={{ fontSize: '1.2rem' }}></i>
                        <span className="fw-semibold">See All Sports</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    {/* <img src="assets/img/features-1.jpg" alt="" className="img-fluid" /> */}
                    <img src="/images/sunnys.webp" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End tab content item --> */}

              <div className="tab-pane fade" id="features-tab-2" role="tabpanel">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Yoddha Sports Club</h3>
                    <p className="fst-italic">
                      Renowned for its elite-grade infrastructure and competitive atmosphere, Yoddha Sports Club is where serious athletes train, compete, and excel. Designed to meet professional standards, this venue caters to high-intensity matches, specialized coaching, and skill development.
                    </p>
                    <p className="fst-italic">From finely maintained turf and professional-grade courts to advanced lighting and coaching support, Yoddha is a powerhouse of performance. Its disciplined environment and focus on precision make it a preferred choice for seasoned players and sports academies.</p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> <span>Pro-level courts and turf suited for cricket, football, and multi-sport formats</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Expert coaching programs and rigorous practice setups</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Ideal for elite matches, coaching sessions, and private training camps</span></li>
                    </ul>
                    {/* Eye icon and "See All Sports" */}
                    <div className="d-flex justify-content-start align-items-center mb-3">
                      <div className={`${styles.hoverYellow}`} onClick={() => setPopupVenue("Yoddha Sports Club")}>
                        <i className="bi bi-eye me-2" style={{ fontSize: '1.2rem' }}></i>
                        <span className="fw-semibold">See All Sports</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    {/* <img src="assets/img/features-2.jpg" alt="" className="img-fluid" /> */}
                    <img src="/images/YODDHA.webp" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End tab content item --> */}

              <div className="tab-pane fade" id="features-tab-3" role="tabpanel">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Ranbhumi</h3>
                    <p className="fst-italic">
                      Ranbhumi stands true to its name — the ultimate battleground for rising stars and competitive sports events. With ample space, structured layouts, and a dynamic vibe, this venue is built for inter-school, inter-college, and open tournaments that demand high energy and smooth execution.
                    </p>
                    <p className="fst-italic">From day-long competitions to weekend sports fests, Ranbhumi offers the perfect setting for organized, large-scale events. It brings together the thrill of sports and the spirit of teamwork in a venue that ready for action.</p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> <span>Expansive grounds tailored for tournaments and league-style matches</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Professional setup with ample seating, parking, and event coordination support</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Perfect for schools, colleges, and sports organizations</span></li>
                    </ul>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    {/* Eye icon and "See All Sports" */}
                    <div className="d-flex justify-content-start align-items-center mb-3">
                      <div className={`${styles.hoverYellow}`} onClick={() => setPopupVenue("Ranbhumi")}>
                        <i className="bi bi-eye me-2" style={{ fontSize: '1.2rem' }}></i>
                        <span className="fw-semibold">See All Sports</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    {/* <img src="assets/img/features-3.jpg" alt="" className="img-fluid" /> */}
                    <img src="/images/RANBHUMI.webp" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End tab content item --> */}

              <div className="tab-pane fade" id="features-tab-4" role="tabpanel">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Dhruv Academy</h3>
                    <p className="fst-italic">
                      More than just a school, Dhruv Academy is a nurturing ground for budding athletes. Blending education with sports, this venue is equipped with safe, modern facilities ideal for kids and teens to train, compete, and explore their athletic talents.
                    </p>
                    <p className="fst-italic">
                      With a strong focus on grassroots development, Dhruv Academy is a top choice for summer camps, workshops, and school tournaments. It promotes holistic growth through physical activity, discipline, and fun.
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> <span>Child-friendly courts, grounds, and equipment for multiple sports</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Ideal for school-level competitions, beginner coaching, and seasonal camps</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>A balanced environment of learning, mentoring, and play</span></li>
                    </ul>
                    {/* Eye icon and "See All Sports" */}
                    <div className="d-flex justify-content-start align-items-center mb-3">
                      <div className={`${styles.hoverYellow}`} onClick={() => setPopupVenue("Dhruv Academy")}>
                        <i className="bi bi-eye me-2" style={{ fontSize: '1.2rem' }}></i>
                        <span className="fw-semibold">See All Sports</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    {/* <img src="assets/img/features-4.jpg" alt="" className="img-fluid" /> */}
                    <img src="/images/DHRUV.webp" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End tab content item --> */}

            </div>

          </div>

        </section>
        {/* <!-- /Venue Section --> */}

      </main>

      {popupVenue && (
        <SportsPopup
          venueName={popupVenue}
          // sports={venueSportsData[popupVenue]}
          onClose={() => setPopupVenue(null)}
        />
      )}
    </>
  )
}
