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
