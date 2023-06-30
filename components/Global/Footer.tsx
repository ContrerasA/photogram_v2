import React from 'react'

import { scriptFont } from '@/src/Utils/FontUtils';

const Footer = () => {
	return (
		<div className='bg-gray-100 mt-20 pt-20 pb-40'>

			<div className='flex justify-center space-x-20'>
				<div className='w-1/6 text-center'>
					<p className={`${scriptFont.className} text-2xl mb-2`}>About us</p>
					<hr className='mb-2' />
					<p>FAQ</p>
					<p>Contact</p>
				</div>


				<div className='w-1/6 text-center'>
					<p className={`${scriptFont.className} text-2xl mb-2`}>Services</p>
					<hr className='mb-2' />
					<p>Digital Booth</p>
					<p>Premium Photo Booth</p>
					<p>Magic Mirror Booth</p>
					<br />
					<p>Weddings</p>
					<p>Parties</p>
					<p>Corporate Events</p>
				</div>

				<div className='w-1/6 text-center'>
					<p className={`${scriptFont.className} text-2xl mb-2`}>Contact Us</p>
					<hr className='mb-2' />
					<p>About</p>
					<p>Check Availability</p>
					<p>Request An Instant Quote</p>
					<p>Email: info@photogrambooth.com</p>
					<p>Tel: (408) 703-5994</p>
				</div>

				<div className='w-1/6 text-center'>
					<p className={`${scriptFont.className} text-2xl mb-2`}>Legal</p>
					<hr className='mb-2' />
					<p>Terms of Service</p>
					<p>Privacy Policy</p>
				</div>


			</div>
		</div>
	)
}

export default Footer