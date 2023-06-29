import Navbar from "@/components/Navbar";

import { AiFillStar } from 'react-icons/ai'
import { Nothing_You_Could_Do } from 'next/font/google'
const scriptFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })


export default function Home() {

	return (
		<main className="">
			<Navbar />

			{/* Video */}
			<div className='relative'>
				<video className=' h-full w-full' muted autoPlay loop>
					<source src='/videos/mainVideo.webm' />
				</video>
				<div className="absolute bg-gray-900 bg-opacity-50 top-0 right-0 bottom-0 left-0" />
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
					<p className="text-2xl font-bold text-white">Whether you're looking to rent a photo booth for a private, or corporate event, we have you covered</p>
					<div className="flex w-full h-full items-center justify-center">
						<div className="flex flex-col w-1/2 m-3 space-y-3">
							<button className="btn ">Photo Booth Packages</button>
							<button className="btn btn-primary ">Check Availability</button>
							<button className="btn  ">Book Now</button>
						</div>
					</div>
				</div>
			</div>

			{/* Services description */}
			<section className="w-full my-10">
				{/* Stars */}
				<div className="flex justify-center text-4xl text-yellow-300 mb-5">
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
				</div>
				<div className="text-center my-5">
					<p className={`${scriptFont.className} text-5xl mb-5`}>
						Picture Perfect Photo Booth Packages
					</p>

					<p className="mb-5 text-sm">
						Welcome to Photohram Booth, where unforgettable memories come to life! With our open-air booths, we capture stunning pictures that beautifully encapsulate the joy and laughter of your guests. From spontaneous snapshots to heartfelt moments, our booths are the perfect addition to any event, ensuring an experience filled with cherished memories that will last a lifetime.
					</p>
					<p className=" text-sm">
						At our Photogram Booth, we pride ourselves on delivering excellence through every click. Our state-of-the-art equipment ensures that every picture taken is of the highest quality, capturing the finest details and vibrant colors. Moreover, our dedicated attendants are committed to providing an effortless and stress-free experience, handling all the logistics and ensuring that your guests can focus on enjoying the moment while we take care of the rest.
					</p>
				</div>
			</section>

			<section>
				
			</section>


			{/* space */}
			<div className="h-screen bg-gray-300">

			</div>
		</main>
	)
}
