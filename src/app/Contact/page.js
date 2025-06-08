"use client";

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Page() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setForm({ name: "", email: "", subject: "", message: "" });
      setShowModal(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <main className="main">
        {/* <!-- Page Title --> */}
        <div
          className="page-title dark-background"
          style={{ backgroundImage: "url('assets/img/page-title-bg.jpg')" }}
        >
          <div className="container position-relative">
            <h1>Contact</h1>
            <nav className="breadcrumbs">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li className="current">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Contact Section --> */}
        <section id="contact" className="contact section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>

            <div className="row gy-4 mt-1">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                  frameBorder="0"
                  style={{ border: 0, width: '100%', height: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="col-lg-6">
                <form className="php-email-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="400">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>

                    <div className="col-md-6">
                      <input type="email" name="email" className="form-control" placeholder="Your Email" required value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>

                    <div className="col-md-12">
                      <input type="text" name="subject" className="form-control" placeholder="Subject" required value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                    </div>

                    <div className="col-md-12">
                      <textarea name="message" rows="6" className="form-control" placeholder="Message" required value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      {loading && <div className="loading">Sending...</div>}
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>

                {/* ✅ Modal */}
                {showModal && (
                  <div className="modal-backdrop">
                    <div className="modal-box">
                      <h4>Thank you!</h4>
                      <p>We have received your message and will connect with you soon.</p>
                      <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                  </div>
                )}
              </div>


              <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-box {
          background: #fff;
          padding: 2rem;
          text-align: center;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .modal-box h4 {
          margin-bottom: 1rem;
        }

        .modal-box button {
          margin-top: 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
