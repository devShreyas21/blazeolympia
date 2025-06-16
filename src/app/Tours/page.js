import React from 'react'

export default function page() {
  return (
    <div>

      <div className="page-title dark-background" style={{ backgroundImage: "url(/images/banners/tours-banner.jpg)" }}>
        <div className="container position-relative">
          <h1>Tours</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><a href="index.html">Home</a></li>
              <li className="current">Tours</li>
            </ol>
          </nav>
        </div>
      </div>


      <section id="services" className="services section light-background">

        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
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
                <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
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
                <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
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


      <section id="features-cards" className="features-cards section">

        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <h3>Quasi eaque omnis</h3>
              <p>Eius non minus autem soluta ut ui labore omnis quisquam corrupti autem odit voluptas quos commodi magnam occaecati.</p>
              <ul className="list-unstyled">
                <li><i className="bi bi-check2"></i> <span>Ullamco laboris nisi ut aliquip</span></li>
                <li><i className="bi bi-check2"></i> <span>Duis aute irure dolor in reprehenderit</span></li>
                <li><i className="bi bi-check2"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
              </ul>
            </div>{/*  <!-- End feature item--> */}

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <h3>Et nemo dolores consectetur</h3>
              <p>Ducimus ea quam et occaecati est. Temporibus in soluta labore voluptates aut. Et sit soluta non repellat sed quia dire plovers tradoria</p>

              <ul className="list-unstyled">
                <li><i className="bi bi-check2"></i> <span>Enim temporibus maiores eligendi</span></li>
                <li><i className="bi bi-check2"></i> <span>Ut maxime ut quibusdam quam qui</span></li>
                <li><i className="bi bi-check2"></i> <span>Officiis aspernatur in officiis</span></li>
              </ul>
            </div>{/*  <!-- End feature item--> */}

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <h3>Staque laboriosam modi</h3>
              <p>Velit eos error et dolor omnis voluptates nobis tenetur sed enim nihil vero qui suscipit ipsum at magni. Ipsa architecto consequatur aliquam</p>
              <ul className="list-unstyled">
                <li><i className="bi bi-check2"></i> <span>Quis voluptates laboriosam numquam</span></li>
                <li><i className="bi bi-check2"></i> <span>Debitis eos est est corrupti</span></li>
              </ul>
            </div>{/*  <!-- End feature item--> */}

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <h3>Dignissimos suscipit iste</h3>
              <p>Molestiae occaecati assumenda quia saepe nobis recusandae at dicta ducimus sequi numquam commodi est in consequatur ea magnam quia itaque</p>
              <ul className="list-unstyled">
                <li><i className="bi bi-check2"></i> <span>Veritatis qui reprehenderit quis</span></li>
                <li><i className="bi bi-check2"></i> <span>Accusantium vel numquam sunt minus</span></li>
                <li><i className="bi bi-check2"></i> <span>Voluptatem pariatur est sationem</span></li>
              </ul>
            </div>{/*  <!-- End feature item--> */}

            {/*  */}
          </div>

        </div>

      </section>


      <section id="alt-services-2" className="alt-services-2 section">

        <div className="container">

          <div className="row justify-content-around gy-4">

            <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
              <h3>Enim quis est voluptatibus aliquid consequatur</h3>
              <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

              <div className="row">

                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias </p>
                  </div>
                </div>

                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-patch-check flex-shrink-0"></i>
                  <div>
                    <h4>Nemo Enim</h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiise</p>
                  </div>
                </div>

                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>Dine Pad</h4>
                    <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit</p>
                  </div>
                </div>

                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>Tride clov</h4>
                    <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit</p>
                  </div>
                </div>

              </div>

            </div>

            <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
              <img src="assets/img/features-3-2.jpg" alt="" />
            </div>

          </div>

        </div>

      </section>


    </div>
  )
}
