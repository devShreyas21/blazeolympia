'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {

    const pathname = usePathname()

    return (
        <div>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                    <Link href="/" className=" d-flex align-items-center">
                             <img src="/images/logo.png" className='navbarLogo' />
                    </Link>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><Link href="/" className={pathname == '/' ? 'active' : ''}>Home</Link></li>
                            <li><Link href="/About" className={pathname == '/About' ? 'active' : ''}>About</Link></li>
                            <li><Link href="/Sports"className={pathname == '/Sports' ? 'active' : ''}>Sports</Link></li>
                            <li><Link href="/Venues" className={pathname == '/Venues' ? 'active' : ''}>Venues</Link></li>
                            <li><Link href="/Events" className={pathname == '/Events' ? 'active' : ''}>Events</Link></li>
                            <li><Link href="/Service" className={pathname == '/Service' ? 'active' : ''}>Service</Link></li>
                            {/* <li><Link href="/Tours" className={pathname == '/Tours' ? 'active' : ''}>Tours</Link></li> */}
                            <li><Link href="/Contact" className={pathname == '/Contact' ? 'active' : ''}>Contact</Link></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                </div>
            </header>
        </div>
    )
}
