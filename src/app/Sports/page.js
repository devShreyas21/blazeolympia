'use client'
import React, { useState } from 'react'
import SportCard from '../Components/sportcard'


export default function Page() {

  return (
    <>
      <main className="main">
        {/*  */}

        {/*  <!-- Page Title --> */}
        <div className="page-title dark-background" style={{ backgroundImage: "url(images/banners/sports-banner.jpeg)" }}>
          <div className="container position-relative">
            <h1>Sports</h1>
            <nav className="breadcrumbs">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li className="current">Sports</li>
              </ol>
            </nav>
          </div>
        </div>{/*  <!-- End Page Title --> */}

        <section id="blog-posts" className="blog-posts section">
        <div className="container">
          <div className="row gy-4">

            <SportCard
              icon="🏀"
              title="Basketball"
              image="images/sports/basketball.jpg"
              coach="Alex Johnson"
              bookingPrice={500}
              coachingPrice={1200}
              description="Enjoy premium indoor basketball courts with professional coaching available for all age groups. Flexible timing and easy booking options."
            />

            <SportCard
              icon="🏏"
              title="Cricket"
              image="images/sports/cricket.jpg"
              coach="Alex Johnson"
              bookingPrice={600}
              coachingPrice={1400}
              description="Play on indoor and outdoor cricket pitches with coaching for all age groups. Flexible schedules and hassle-free booking available."
            />

            <SportCard
              icon="⚽"
              title="Football"
              image="images/sports/football.jpg"
              coach="Alex Johnson"
              bookingPrice={500}
              coachingPrice={1200}
              description="Train and play on premium turf fields with skilled coaches guiding all age levels. Enjoy convenient timings and quick, easy reservations."
            />

            <SportCard
              icon="🏊"
              title="Swimming"
              image="images/sports/swimming.jpg"
              coach="Alex Johnson"
              bookingPrice={500}
              coachingPrice={1200}
              description="Dive into world-class indoor pools with certified instructors for all ages and skill levels. Flexible session timings and simple booking process."
            />

          </div>
        </div>
      </section>


      </main>
    </>
  )
}
