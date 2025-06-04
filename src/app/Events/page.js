import React from 'react'
import styles from "../page.module.css";
import Image from 'next/image';
export default function Page() {
  return (
    <>
      <main class="main">

        {/* <!-- Page Title --> */}
        <div class="page-title dark-background" style={{ backgroundImage: "url('/assets/img/page-title-bg.jpg')" }}>
          <div class="container position-relative">
            <h1>Events</h1>
            <nav class="breadcrumbs">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li class="current">Events</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Events Section --> */}
        <section id="about" class="about section">

          <div class="container">

            <div class="row position-relative">

              <div class="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200"><img src="assets/img/about.jpg" /></div>

              <div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                <h2 class="inner-title">All-in-One Sports Event Solutions</h2>
                <div class="our-story">
                  <p>From thrilling tournaments to high-energy school and corporate matches, we offer complete support to bring your sports event to life. Whether it's a friendly competition or a championship finale, our expert team handles everything — so you can focus on the game.
                    From equipment to execution, we've got your event covered from start to finish.
                    .</p>
                  <ul>
                    <li><i class="bi bi-check-circle"></i> <span>Pro-level sound systems and live commentary setups</span></li>
                    <li><i class="bi bi-check-circle"></i> <span>Full event branding — jerseys, banners, backdrops & more</span></li>
                    <li><i class="bi bi-check-circle"></i> <span>Seamless logistics — transport, setup, seating, and on-ground coordination</span></li>
                    <li><i class="bi bi-check-circle"></i> <span>Arrangements for referees, trophies, refreshments & event staff</span></li>

                  </ul>
                </div>
              </div>

            </div>

          </div>

        </section>
        {/* <!-- /Events Section --> */}
      </main>
    </>
  )
}
