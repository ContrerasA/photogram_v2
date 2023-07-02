import React from 'react'

import { Nothing_You_Could_Do } from 'next/font/google'
const scriptFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })


const Events = () => {
	return (
		<section className="flex flex-col items-center justify-center mt-20 max-w-[90vw] m-auto">
			<p className={`${scriptFont.className} text-5xl mb-5 text-center`}>
				Events
			</p>
			<p className="text-center lg:max-w-[66vw]">
				Photogram Booth caters to a wide array of events, including parties, weddings, and corporate gatherings. Our photo booths add a touch of enchantment to each occasion, capturing cherished moments and creating lasting memories. With customizable features and professional service, we ensure that every event, be it a lively celebration or a corporate affair, becomes an unforgettable experience for all.
			</p>

			<div className="flex flex-col lg:flex-row lg:space-x-10 mt-5  ">
			{/* <div className="flex flex-col lg:flex-row justify-center space-x-10 mt-5 "> */}

				<div className="h-[571px] w-[428px] rounded-[2.5rem] relative overflow-hidden lg:mt-10">
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

				<div className="h-[571px] w-[428px] rounded-[2.5rem] relative overflow-hidden mt-5 lg:mt-0">
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
				<div className="h-[571px] w-[428px] rounded-[2.5rem] relative overflow-hidden mt-5 lg:mt-10">
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