import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div>

            <footer id="footer" className="footer dark-background">

                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <Link href="/" className=" d-flex align-items-center">
                                <img src='/images/logo.png' className='footerLogo'/>
                            </Link>
                            <div className="footer-contact pt-3">
                                <p>A108 Adam Street</p>
                                <p>New York, NY 535022</p>
                                <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                                <p><strong>Email:</strong> <span>info@example.com</span></p>
                            </div>
                            <div className="social-links d-flex mt-4">
                                <Link href=""><i className="bi bi-twitter-x"></i></Link>
                                <Link href=""><i className="bi bi-facebook"></i></Link>
                                <Link href=""><i className="bi bi-instagram"></i></Link>
                                <Link href=""><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/About">About us</Link></li>
                                <li><Link href="/Service">Services</Link></li>
                                <li><Link href="/Sports">Sports</Link></li>
                                <li><Link href="/Venues">Venues</Link></li>
                                <li><Link href="/Events">Events</Link></li>
                                <li><Link href="/Tours">Tours</Link></li>
                                <li><Link href="/Contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><Link href="#">Web Design</Link></li>
                                <li><Link href="#">Web Development</Link></li>
                                <li><Link href="#">Product Management</Link></li>
                                <li><Link href="#">Marketing</Link></li>
                                <li><Link href="#">Graphic Design</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Hic solutasetp</h4>
                            <ul>
                                <li><Link href="#">Molestiae accusamus iure</Link></li>
                                <li><Link href="#">Excepturi dignissimos</Link></li>
                                <li><Link href="#">Suscipit distinctio</Link></li>
                                <li><Link href="#">Dilecta</Link></li>
                                <li><Link href="#">Sit quas consectetur</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Nobis illum</h4>
                            <ul>
                                <li><Link href="#">Ipsam</Link></li>
                                <li><Link href="#">Laudantium dolorum</Link></li>
                                <li><Link href="#">Dinera</Link></li>
                                <li><Link href="#">Trodelas</Link></li>
                                <li><Link href="#">Flexo</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">UpConstruction</strong> <span>All Rights Reserved</span></p>
                    <div className="credits">
                        Designed by <Link href="https://bootstrapmade.com/">BootstrapMade</Link>
                    </div>
                </div>

            </footer>

        </div>
    )
}
