'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const pathname = usePathname()

    return (
        <div>
            <header id="header" className="header d-flex align-items-center fixed-top" style={{backgroundColor:"black"}}>
                <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                    <Link href="/" className="logo d-flex align-items-center">
                            <h1 className="sitename">UpConstruction</h1> <span>.</span>
                    </Link>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><Link href="/" className={pathname == '/' ? 'active' : ''}>Home</Link></li>
                            <li><Link href="/About" className={pathname == '/About' ? 'active' : ''}>About</Link></li>
                            <li><Link href="/Sports"className={pathname == '/Sports' ? 'active' : ''}>Sports</Link></li>
                            <li><Link href="/Venues" className={pathname == '/Venues' ? 'active' : ''}>Venues</Link></li>
                            <li><Link href="/Events" className={pathname == '/Events' ? 'active' : ''}>Events</Link></li>
                            {/* <li className="dropdown"><Link href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                                <ul>
                                    <li><Link href="#">Dropdown 1</Link></li>
                                    <li className="dropdown"><Link href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                                        <ul>
                                            <li><Link href="#">Deep Dropdown 1</Link></li>
                                            <li><Link href="#">Deep Dropdown 2</Link></li>
                                            <li><Link href="#">Deep Dropdown 3</Link></li>
                                            <li><Link href="#">Deep Dropdown 4</Link></li>
                                            <li><Link href="#">Deep Dropdown 5</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="#">Dropdown 2</Link></li>
                                    <li><Link href="#">Dropdown 3</Link></li>
                                    <li><Link href="#">Dropdown 4</Link></li>
                                </ul>
                            </li> */}
                            <li><Link href="/Contact" className={pathname == '/Contact' ? 'active' : ''}>Contact</Link></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                </div>
            </header>
        </div>
    )
}
