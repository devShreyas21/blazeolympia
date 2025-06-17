'use client'
import React, { useState } from 'react'
import Book from '../Components/Book'
import Enroll from '../Components/Enroll';

export default function Page() {

  const [showBooking, setShowBooking] = useState(false);
  const [showEnroll, setShowEnroll] = useState(false);

  const openBooking = () => {
    setShowBooking(true);
    setShowEnroll(false);
  };

  const openEnroll = () => {
    setShowEnroll(true);
    setShowBooking(false);
  };

  const closeEnroll = () => {
    setShowEnroll(false);
  };

  const closeBooking = () => {
  setShowBooking(false);
};




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

        {/*  <!-- Blog Posts Section --> */}
        <section id="blog-posts" className="blog-posts section">

          <div className="container">
            <div className="row gy-4">

              <div className="col-lg-4">
                <article className="position-relative h-100">

                  <div className="post-img position-relative overflow-hidden">
                    <img src="assets/img/blog/blog-1.jpg" className="img-fluid" alt="Basketball" />
                    <span className="post-date">Updated Info</span>
                  </div>

                  <div className="post-content d-flex flex-column">

                    <h3 className="post-title">🏀 Basketball</h3>

                    <div className="meta d-flex flex-column gap-1">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-geo-alt"></i>
                        <span className="ps-2">Available at: Phoenix Stadium, Star Court</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-person-badge"></i>
                        <span className="ps-2">Coach: Alex Johnson | ₹1200/month</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>
                        <span className="ps-2">Booking: ₹500 for 2 hours</span>
                      </div>
                    </div>

                    <p>
                      Enjoy premium indoor basketball courts with professional coaching available for all age groups. Flexible timing and easy booking options.
                    </p>

                    <hr />

                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-primary"
                        onClick={openBooking}
                      >
                        {/* {showBooking ? 'Close Booking' : 'Book Court'} */}
                        Book Court
                      </button>
                      <button
                        className="btn btn-outline-primary"
                        onClick={openEnroll}
                      >
                        {/* {showEnroll ? 'Close Form' : 'Enroll for Coaching'} */}
                        Enroll for Coaching
                      </button>
                    </div>

                    {showBooking && (
                      <div className="mt-4">
                        <Book
                          sportName="Basketball"
                          venues={['Phoenix Stadium', 'Star Court']}
                          amount={500}
                          onClose={closeBooking}
                        />
                      </div>
                    )}

                    {showEnroll && (
                      <div className="mt-4">
                        <Enroll
                          sportName="Basketball"
                          venues={['Phoenix Stadium', 'Star Court']}
                          amount={1200}
                          onClose={closeEnroll}
                        />
                      </div>
                    )}

                  </div>

                </article>
              </div>


              <div className="col-lg-4">
                <article className="position-relative h-100">

                  <div className="post-img position-relative overflow-hidden">
                    <img src="assets/img/blog/blog-1.jpg" className="img-fluid" alt="" />
                    <span className="post-date">December 12</span>
                  </div>

                  <div className="post-content d-flex flex-column">

                    <h3 className="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <span className="ps-2">John Doe</span>
                      </div>
                      <span className="px-3 text-black-50">/</span>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                      </div>
                    </div>

                    <p>
                      Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                    </p>

                    <hr />

                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>

                  </div>

                </article>
              </div>{/*  <!-- End post list item --> */}

              <div className="col-lg-4">
                <article className="position-relative h-100">

                  <div className="post-img position-relative overflow-hidden">
                    <img src="assets/img/blog/blog-2.jpg" className="img-fluid" alt="" />
                    <span className="post-date">March 19</span>
                  </div>

                  <div className="post-content d-flex flex-column">

                    <h3 className="post-title">Nisi magni odit consequatur autem nulla dolorem</h3>

                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <span className="ps-2">Julia Parker</span>
                      </div>
                      <span className="px-3 text-black-50">/</span>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
                      </div>
                    </div>

                    <p>
                      Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.
                    </p>

                    <hr />

                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>

                  </div>

                </article>
              </div>{/*  <!-- End post list item --> */}

              <div className="col-lg-4">
                <article className="position-relative h-100">

                  <div className="post-img position-relative overflow-hidden">
                    <img src="assets/img/blog/blog-3.jpg" className="img-fluid" alt="" />
                    <span className="post-date">June 24</span>
                  </div>

                  <div className="post-content d-flex flex-column">

                    <h3 className="post-title">Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.</h3>

                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <span className="ps-2">Maria Doe</span>
                      </div>
                      <span className="px-3 text-black-50">/</span>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-folder2"></i> <span className="ps-2">Sports</span>
                      </div>
                    </div>

                    <p>
                      Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.
                    </p>

                    <hr />

                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>

                  </div>

                </article>
              </div>{/*  <!-- End post list item --> */}


            </div>
          </div>

        </section>{/*  <!-- /Blog Posts Section --> */}


      </main>
    </>
  )
}
