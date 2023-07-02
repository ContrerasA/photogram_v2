import React from 'react'

import { scriptFont } from '@/src/Utils/FontUtils';
import Link from 'next/link';

const Footer = () => {
	return (
		<section className='bg-gray-100 mt-20 pt-20 pb-40'>
			<div className='flex justify-center space-x-20'>
				<div className='w-1/6 text-center flex flex-col'>
					<p className={`${scriptFont.className} text-2xl mb-2`}>About us</p>
					<hr className='mb-2' />
					<Link href="/about">FAQ</Link>
					<Link href="/about#contact">Contact</Link>
				</div>


				<div className='w-1/6 text-center flex flex-col'>
					<p className={`${scriptFont.className} text-2xl mb-2`}>Services</p>
					<hr className='mb-2' />
					<p>Digital Booth</p>
					<p>Premium Photo Booth</p>
					<p>Magic Mirror Booth</p>
					<br />
					<Link href={"/events/weddings"}>Weddings</Link>
					<Link href={"/events/parties"}>Parties</Link>
					<Link href={"/events/corporate-events"}>Corporate Events</Link>
				</div>

				<div className='w-1/6 text-center flex flex-col'>
					<p className={`${scriptFont.className} text-2xl mb-2`}>Contact Us</p>
					<hr className='mb-2' />
					<p>About</p>
					<p>Check Availability</p>
					<p>Request An Instant Quote</p>
					<p>Email: info@photogrambooth.com</p>
					<p>Tel: (408) 703-5994</p>
				</div>

				<div className='w-1/6 text-center flex flex-col'>
					<p className={`${scriptFont.className} text-2xl mb-2`}>Legal</p>
					<hr className='mb-2' />
					<Link href='/terms-of-service'>Terms of Service</Link>
					<Link href='/privacy-policy'>Privacy Policy</Link>
				</div>


			</div>
		</section>
	)
}

export default Footer