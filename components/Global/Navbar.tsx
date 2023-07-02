'use client';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

	function mouseDownHandler(_e: any) {
		const foundDropdowns = document.querySelectorAll('details');

		foundDropdowns.forEach(el => {
			if (el?.hasAttribute('open')) {
				setTimeout(() => {
					el.removeAttribute('open')
				}, 250);
			}
		})

	}

	useEffect(() => {
		document.addEventListener('mousedown', mouseDownHandler);
	})

	return (
		<div className="navbar bg-base-100 sticky top-0 z-50">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						<li><Link href="/">Home</Link></li>
						<li tabIndex={0}>
							<details>
								<summary>Booth Packages</summary>
								<ul className="p-2 z-50">
									<li className=' z-50'>
										<Link href="/booths/digital-photo-booth">Digital Booth</Link>
									</li>
									<li className=' z-50'>
										<Link href="/booths/premium-photo-booth">Premium Photo Booth</Link>
									</li>
									<li className=' z-50'>
										<Link href="/booths/magic-mirror-photo-booth">Magic Mirror Booth</Link>
									</li>
								</ul>
							</details>
						</li>
						<li><Link href="/events/weddings">Weddings</Link></li>
						<li><Link href="/events/parties">Parties</Link></li>
						<li><Link href="/events/corporate-events">Corporate Events</Link></li>
						<li><Link href="/gallery">Gallery</Link></li>
						<li><Link href="/photo-templates">Photo Templates</Link></li>
						<li><Link href="/backdrops">Backdrops</Link></li>
						<li><Link href="/about">About</Link></li>
						<li><Link href="/about#contact">Contact Us</Link></li>
					</ul>
				</div>
				<img src="/images/logos/Logo Rev A2 Flat Long.svg" alt="" className='h-8' />
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul id='boothPackagesMenu' className="menu menu-horizontal px-1">
					<li><Link href="/">Home</Link></li>
					<li tabIndex={0}>
						<details>
							<summary>Booth Packages</summary>
							<ul className="p-2 z-50">
								<li className=' z-50'>
									<Link href="/booths/digital-photo-booth">Digital Booth</Link>
								</li>
								<li className=' z-50'>
									<Link href="/booths/premium-photo-booth">Premium Photo Booth</Link>
								</li>
								<li className=' z-50'>
									<Link href="/booths/magic-mirror-photo-booth">Magic Mirror Booth</Link>
								</li>
							</ul>
						</details>
					</li>
					<li><Link href="/events/weddings">Weddings</Link></li>
					<li><Link href="/events/parties">Parties</Link></li>
					<li><Link href="/events/corporate-events">Corporate Events</Link></li>
					<li><Link href="/gallery">Gallery</Link></li>
					<li><Link href="/photo-templates">Photo Templates</Link></li>
					<li><Link href="/backdrops">Backdrops</Link></li>
					<li><Link href="/about">About</Link></li>
					<li><Link href="/about#contact">Contact Us</Link></li>
				</ul>
			</div>
			<div className="navbar-end  lg:visible">
			</div>
		</div>
	)
}

export default Navbar