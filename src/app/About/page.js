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
                <h2 className="inner-title">Consequatur eius et magnam</h2>
                <div className="our-story">
                  <h4>Est 1988</h4>
                  <h3>Our Story</h3>
                  <p>Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem. Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor. Aliquam consectetur laudantium temporibus dicta minus dolor.</p>
                  <ul>
                    <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
                    <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
                    <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
                  </ul>
                  <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet. Molestias in maxime doloremque.</p>

                  <div className="watch-video d-flex align-items-center position-relative">
                    <i className="bi bi-play-circle"></i>
                    <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox stretched-link">Watch Video</a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>
        {/* <!-- /About Section --> */}

        {/* <!-- Stats Counter Section --> */}
        <section id="stats-counter" className="stats-counter section">

          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Stats</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">

              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Projects</p>
                  </div>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-headset color-green flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-people color-pink flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

            </div>

          </div>

        </section>
        {/* <!-- /Stats Counter Section --> */}

        {/* <!-- Alt Services Section --> */}
        <section id="alt-services" className="alt-services section">

          <div className="container">

            <div className="row justify-content-around gy-4">
              <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100"><img src="assets/img/alt-services.jpg" alt="" /></div>

              <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4><a href="" className="stretched-link">Lorem Ipsum</a></h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-patch-check flex-shrink-0"></i>
                  <div>
                    <h4><a href="" className="stretched-link">Nemo Enim</a></h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="500">
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4><a href="" className="stretched-link">Dine Pad</a></h4>
                    <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="600">
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4><a href="" className="stretched-link">Tride clov</a></h4>
                    <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi</p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

              </div>
            </div>

          </div>

        </section>
        {/* <!-- /Alt Services Section --> */}

        {/* <!-- Alt Services 2 Section --> */}
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
                  {/* <!-- End Icon Box --> */}

                  <div className="col-lg-6 icon-box d-flex">
                    <i className="bi bi-patch-check flex-shrink-0"></i>
                    <div>
                      <h4>Nemo Enim</h4>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiise</p>
                    </div>
                  </div>
                  {/* <!-- End Icon Box --> */}

                  <div className="col-lg-6 icon-box d-flex">
                    <i className="bi bi-brightness-high flex-shrink-0"></i>
                    <div>
                      <h4>Dine Pad</h4>
                      <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit</p>
                    </div>
                  </div>
                  {/* <!-- End Icon Box --> */}

                  <div className="col-lg-6 icon-box d-flex">
                    <i className="bi bi-brightness-high flex-shrink-0"></i>
                    <div>
                      <h4>Tride clov</h4>
                      <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit</p>
                    </div>
                  </div>
                  {/* <!-- End Icon Box --> */}

                </div>

              </div>

              <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
                <img src="assets/img/features-3-2.jpg" alt="" />
              </div>

            </div>

          </div>

        </section>
        {/* <!-- /Alt Services 2 Section --> */}

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
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
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
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
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
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="400">
                <div className="member-img">
                  <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur</p>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="500">
                <div className="member-img">
                  <img src="assets/img/team/team-5.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Brian Doe</h4>
                  <span>Marketing</span>
                  <p>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit</p>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
                <div className="member-img">
                  <img src="assets/img/team/team-6.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Josepha Palas</h4>
                  <span>Operation</span>
                  <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

            </div>

          </div>

        </section>
        {/* <!-- /Team Section --> */}

        {/* <!-- Testimonials Section --> */}
        <section id="testimonials" className="testimonials section">

          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="swiper init-swiper">
              <script
                type="application/json"
                classNameName="swiper-config"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    loop: true,
                    speed: 600,
                    autoplay: {
                      delay: 5000,
                    },
                    slidesPerView: "auto",
                    pagination: {
                      el: ".swiper-pagination",
                      type: "bullets",
                      clickable: true,
                    },
                    breakpoints: {
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                      },
                      1200: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                    },
                  }),
                }}
              ></script>

              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>

        </section>
        {/* <!-- /Testimonials Section --> */}

      </main>
    </>
  );
}
