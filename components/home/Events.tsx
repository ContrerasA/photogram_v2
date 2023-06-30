import React from 'react'

import { Nothing_You_Could_Do } from 'next/font/google'
const scriptFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })


const Events = () => {
  return (
	<section className="my-20">
	<p className={`${scriptFont.className} text-5xl mb-5 text-center`}>
		Events
	</p>
	<p className="text-sm text-center">

		Photogram Booth caters to a wide array of events, including parties, weddings, and corporate gatherings. Our photo booths add a touch of enchantment to each occasion, capturing cherished moments and creating lasting memories. With customizable features and professional service, we ensure that every event, be it a lively celebration or a corporate affair, becomes an unforgettable experience for all.
	</p>

	<div className="flex justify-center space-x-10 my-10 mx-20">
		<div className="h-1/3 aspect-[3/4] bg-slate-500 rounded-[2.5rem] mt-14 relative overflow-hidden">
			<div className="overlay" />
			<img src="/images/eventImages/party01.jpeg" alt="" className="w-full h-full object-cover" />
			<div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex flex-col">
				<div className="flex-grow"></div>
				<div className="flex flex-col flex-end mb-10 justify-center items-center">
					<p className={`${scriptFont.className} text-5xl mb-5 text-center text-white`}>Parties</p>
					<button className="btn btn-primary">LEARN MORE</button>
				</div>
			</div>
		</div>

		<div className="h-1/3 aspect-[3/4] bg-slate-500 rounded-[2.5rem] relative overflow-hidden">
			<div className="overlay" />
			<img src="/images/eventImages/wedding01.jpeg" alt="" className="w-full h-full object-cover" />
			<div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex flex-col">
				<div className="flex-grow"></div>
				<div className="flex flex-col flex-end mb-10 justify-center items-center">
					<p className={`${scriptFont.className} text-5xl mb-5 text-center text-white`}>Weddings</p>
					<button className="btn btn-primary">LEARN MORE</button>
				</div>
			</div>


		</div>
		<div className="h-1/3 aspect-[3/4] bg-slate-500 rounded-[2.5rem] mt-14 relative overflow-hidden">
			<div className="overlay" />
			<img src="/images/eventImages/corporate01.jpeg" alt="" className="w-full h-full object-cover" />
			<div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex flex-col">
				<div className="flex-grow"></div>
				<div className="flex flex-col flex-end mb-10 justify-center items-center">
					<p className={`${scriptFont.className} text-5xl mb-5 text-center text-white`}>Corporate</p>
					<button className="btn btn-primary">LEARN MORE</button>
				</div>
			</div>


		</div>

	</div>
</section>

  )
}

export default Events