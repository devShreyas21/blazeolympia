import React from 'react'
import styles from "../page.module.css";
import Image from 'next/image';
export default function Page() {
  return (
    <>
      <main className="main">

        {/* <!-- Page Title --> */}
       <div className="page-title dark-background" style={{ backgroundImage: "url('assets/img/page-title-bg.jpg')" }}>
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
        {/* <!-- End Page Title --> */}

        {/* <!-- Services Section --> */}
        <section id="services" className="services section light-background">

          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item  position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-mountain-city"></i>
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                  </div>
                  <h3>Eosle Commodi</h3>
                  <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-compass-drafting"></i>
                  </div>
                  <h3>Ledo Markt</h3>
                  <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-trowel-bricks"></i>
                  </div>
                  <h3>Asperiores Commodit</h3>
                  <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-helmet-safety"></i>
                  </div>
                  <h3>Velit Doloremque</h3>
                  <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                  </div>
                  <h3>Dolori Architecto</h3>
                  <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

            </div>

          </div>

        </section>
        {/* <!-- /Services Section --> */}

        {/* <!-- Features Cards Section --> */}
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
              </div>
              {/* <!-- End feature item--> */}

              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <h3>Et nemo dolores consectetur</h3>
                <p>Ducimus ea quam et occaecati est. Temporibus in soluta labore voluptates aut. Et sit soluta non repellat sed quia dire plovers tradoria</p>

                <ul className="list-unstyled">
                  <li><i className="bi bi-check2"></i> <span>Enim temporibus maiores eligendi</span></li>
                  <li><i className="bi bi-check2"></i> <span>Ut maxime ut quibusdam quam qui</span></li>
                  <li><i className="bi bi-check2"></i> <span>Officiis aspernatur in officiis</span></li>
                </ul>
              </div>
              {/* <!-- End feature item--> */}

              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <h3>Staque laboriosam modi</h3>
                <p>Velit eos error et dolor omnis voluptates nobis tenetur sed enim nihil vero qui suscipit ipsum at magni. Ipsa architecto consequatur aliquam</p>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check2"></i> <span>Quis voluptates laboriosam numquam</span></li>
                  <li><i className="bi bi-check2"></i> <span>Debitis eos est est corrupti</span></li>
                </ul>
              </div>
              {/* <!-- End feature item--> */}

              <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <h3>Dignissimos suscipit iste</h3>
                <p>Molestiae occaecati assumenda quia saepe nobis recusandae at dicta ducimus sequi numquam commodi est in consequatur ea magnam quia itaque</p>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check2"></i> <span>Veritatis qui reprehenderit quis</span></li>
                  <li><i className="bi bi-check2"></i> <span>Accusantium vel numquam sunt minus</span></li>
                  <li><i className="bi bi-check2"></i> <span>Voluptatem pariatur est sationem</span></li>
                </ul>
              </div>
              {/* <!-- End feature item--> */}

            </div>

          </div>

        </section>
        {/* <!-- /Features Cards Section --> */}

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

        {/* <!-- Testimonials Section --> */}
        <section id="testimonials" className="testimonials section">

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
              />

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
  )
}
