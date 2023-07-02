import React from 'react'

import { Nothing_You_Could_Do } from 'next/font/google'
const scriptFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })
import shortServiceLocations from '@/src/data/shortServiceLocations.json'


const ServiceLocations = () => {
	return (
		<section className="mt-20">
			<p className={`${scriptFont.className} text-5xl mb-5 text-center`}>
				Areas We Serve
			</p>
			<div className="text-center flex flex-col items-center">
				<p className="text-xl text-center">
					We serve our Photo Booth services for weddings, parties, corporate events, and more in these following areas.
				</p>
				<p className='w-full lg:w-2/3 text-sm'>
					The SF Bay Area including &nbsp;
					{shortServiceLocations.map(el => (
						<>
							{el.city}, &nbsp;
						</>
					))}
					and surrounding areas.
				</p>
			</div>
		</section>
	)
}

export default ServiceLocations