import React from 'react'
import styles from "../page.module.css";
import Image from 'next/image';
export default function page() {

  return (
    <>
      <main className="main">

        {/* <!-- Page Title --> */}
        <div className="page-title dark-background" style={{ backgroundImage: "url('assets/img/page-title-bg.jpg')" }}>
          <div className="container position-relative">
            <h1>Projects</h1>
            <nav className="breadcrumbs">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li className="current">Projects</li>
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
                      <div className={`${styles.hoverYellow}`}>
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
                      <div className={`${styles.hoverYellow}`}>
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
                      <div className={`${styles.hoverYellow}`}>
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
                      <div className={`${styles.hoverYellow}`}>
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

        {/* <!-- Projects Section --> */}
        <section id="projects" className="projects section">

          <div className="container">

            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

              <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-remodeling">Remodeling</li>
                <li data-filter=".filter-construction">Construction</li>
                <li data-filter=".filter-repairs">Repairs</li>
                <li data-filter=".filter-design">Design</li>
              </ul>
              {/* <!-- End Portfolio Filters --> */}

              <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-remodeling">
                  <div className="portfolio-content h-100">
                    <img src="assets/img/projects/remodeling-1.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/projects/remodeling-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-construction">
                  <div className="portfolio-content h-100">
                    <img src="assets/img/projects/construction-1.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Product 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/projects/construction-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-repairs">
                  <div className="portfolio-content h-100">
                    <img src="assets/img/projects/repairs-1.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Branding 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/projects/repairs-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-design">
                  <div className="portfolio-content h-100">
                    <img src="assets/img/projects/design-1.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Books 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/projects/design-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-remodeling">
                  <div className="portfolio-content h-100">
                    <img src="assets/img/projects/remodeling-2.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/projects/remodeling-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-construction">
                  <div className="portfolio-content h-100">
                    <img src="assets/img/projects/construction-2.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Product 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/projects/construction-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-repairs">
                  <div className="portfolio-content h-100">
                    <img src="assets/img/projects/repairs-2.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Branding 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/projects/repairs-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-design">
                  <div className="portfolio-content h-100">
                    <img src="assets/img/projects/design-2.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Books 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/projects/design-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-remodeling">
                  <div className="portfolio-content h-100">
                    <img src="assets/img/projects/remodeling-3.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/projects/remodeling-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-construction">
                  <div className="portfolio-content h-100">
                    <img src="assets/img/projects/construction-3.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Product 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/projects/construction-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-repairs">
                  <div className="portfolio-content h-100">
                    <img src="assets/img/projects/repairs-3.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Branding 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/projects/repairs-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-design">
                  <div className="portfolio-content h-100">
                    <img src="assets/img/projects/design-3.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Books 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/projects/design-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

              </div>
              {/* <!-- End Portfolio Container --> */}

            </div>

          </div>

        </section>
        {/* <!-- /Projects Section --> */}

      </main>
    </>
  )
}
