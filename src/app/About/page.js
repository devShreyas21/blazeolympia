import React from 'react'
import styles from "../page.module.css";
import Image from 'next/image';
export default function Page() {
  return (
    <>


    
      <main className="main">
        {/* <!-- Page Title --> */}
        <div
          className="page-title dark-background"
          style={{ backgroundImage: "url('/assets/img/page-title-bg.jpg')" }}
        >
          <div className="container position-relative">
            <h1>About</h1>
            <nav className="breadcrumbs">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li className="current">About</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- About Section --> */}
        <section id="about" className="about section">

          <div className="container">

            <div className="row position-relative">

              <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200"><img src="assets/img/about.jpg" /></div>

              <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                {/* <h2 className="inner-title">Consequatur eius et magnam</h2> */}
                <div className="our-story">
                  <h3>Vission </h3>
                  <p>To ignite passion for sports and create a dynamic community where every athlete, beginner or pro, can thrive, compete, and grow through world-class coaching, seamless access, and unforgettable sporting experiences.</p>
                  <h3>Mission</h3>
                  <p>To empower every athlete through expert coaching, seamless sports bookings, inspiring tours, and dynamic corporate events — all while building an inclusive, passion-driven sports ecosystem.</p>
                </div>
              </div>

            </div>

          </div>

        </section>
        {/* <!-- /About Section --> */}


        {/* <!-- Team Section --> */}
        <section id="team" className="team section">

          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container">

            <div className="row gy-5">

              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
                <div className="member-img">
                  <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Sohan Tomar</h4>
                  <span>Chief Executive Officer</span>
                  {/* <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p> */}
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
                <div className="member-img">
                  <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Pooja Tomar</h4>
                  <span>Product Manager</span>
                  {/* <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p> */}
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
                <div className="member-img">
                  <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Brij Singh </h4>
                  <span>CTO</span>
                  {/* <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p> */}
                </div>
              </div>
              {/* <!-- End Team Member --> */}

            </div>

          </div>

        </section>
        {/* <!-- /Team Section --> */}

      </main>
    </>
  );
}
