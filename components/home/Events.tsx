import React from 'react'

import { Nothing_You_Could_Do } from 'next/font/google'
import Link from 'next/link'
const scriptFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })

import eventsData from "@/src/data/eventsData.json"

const Events = () => {
	return (
		<section className="flex flex-col items-center justify-center mt-20 m-auto">
			<p className={`${scriptFont.className} text-5xl mb-5 text-center`}>
				Events
			</p>
			<p className="text-center lg:max-w-[66vw]">
				Photogram Booth caters to a wide array of events, including parties, weddings, and corporate gatherings. Our photo booths add a touch of enchantment to each occasion, capturing cherished moments and creating lasting memories. With customizable features and professional service, we ensure that every event, be it a lively celebration or a corporate affair, becomes an unforgettable experience for all.
			</p>

			<div className="flex flex-col lg:flex-row lg:space-x-10 mt-5 max-w-[90vw] ">

				{eventsData.map(el => (
					<div key={el.id} className="w-[90vw] lg:w-96 h-[550px] rounded-[2.5rem] relative overflow-hidden mt-5">
						<div className="overlay" />
						<img src={el.imagePath} alt="" className="w-full h-full object-cover" />
						<div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex flex-col">
							<div className="flex-grow"></div>
							<div className="flex flex-col flex-end mb-10 justify-center items-center">
								<p className={`${scriptFont.className} text-5xl mb-5 text-center text-white`}>{el.name}</p>
								<Link href={el.buttonPath} className='w-1/2 my-7'><button className="btn btn-primary w-full ">LEARN MORE</button></Link>
							</div>
						</div>
					</div>

				))}

			</div>
		</section>

	)
}

export default Events