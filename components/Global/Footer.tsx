import React from 'react'

import { scriptFont } from '@/src/utils/fontUtils';
import Link from 'next/link';

const Footer = () => {
	return (
		<section className='bg-gray-100 mt-20 pt-20 pb-40'>
			<div className='flex flex-col lg:flex-row justify-center items-center lg:items-start text-lg lg:text-base space-y-10 lg:space-y-0'>
				<div className='lg:w-1/6 w-1/2 text-center flex flex-col lg:mx-20'>
					<p className={`${scriptFont.className} text-2xl mb-2`}>About us</p>
					<hr className='mb-2' />
					<Link href="/about" className='text-blue-400'>FAQ</Link>
					<Link href="/about#contact" className='text-blue-400'>Contact</Link>
				</div>

				<div className='lg:w-1/6 w-1/2 text-center flex flex-col lg:mx-20'>
					<p className={`${scriptFont.className} text-2xl mb-2`}>Services</p>
					<hr className='mb-2' />
					<Link href="/booths/digital-booth" className='text-blue-400'>Digital Booth</Link>
					<Link href="/booths/premium-photo-booth" className='text-blue-400'>Premium Photo Booth</Link>
					<Link href="/booths/magic-mirror-photo-booth" className='text-blue-400'>Magic Mirror Booth</Link>
					<br />
					<Link href="/events/weddings" className='text-blue-400'>Weddings</Link>
					<Link href="/events/parties" className='text-blue-400'>Parties</Link>
					<Link href="/events/corporate-events" className='text-blue-400'>Corporate Events</Link>
				</div>

				<div className='lg:w-1/6 w-1/2 text-center flex flex-col lg:mx-20'>
					<p className={`${scriptFont.className} text-2xl mb-2`}>Contact Us</p>
					<hr className='mb-2' />
					<Link href="/about" className='text-blue-400'>About</Link>
					<Link href="/#request-quote" className='text-blue-400'>Request An Instant Quote</Link>
					<a href="mailto:info@photogrambooth.com?subject=New%20Inquiry" rel="noopener" target="blank" className="text-blue-400">info@photogrambooth.com</a>
					<a href="tel:408-703-5994" className="text-blue-400">(408) 703-5994</a>
				</div>

				<div className='lg:w-1/6 w-1/2 text-center flex flex-col lg:mx-20'>
					<p className={`${scriptFont.className} text-2xl mb-2`}>Legal</p>
					<hr className='mb-2' />
					<Link href='/terms-of-service' className='text-blue-400'>Terms of Service</Link>
					<Link href='/privacy-policy' className='text-blue-400'>Privacy Policy</Link>
				</div>


			</div>
		</section>
	)
}

export default Footer