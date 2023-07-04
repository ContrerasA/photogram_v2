import React from 'react'

import { Nothing_You_Could_Do } from 'next/font/google'
import Link from 'next/link'
const scriptFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })


const BoothServices = () => {
	return (
		<section id="booth-packages" className="m-auto">
			<div>
				<p className={`${scriptFont.className} text-5xl mb-5 text-center`}>
					Our Booth Services
				</p>
				<p className="text-center">
					Take a look at our services below. We&apos;re also able to cater to custom requests. Just shoot us a message, and we&apos;ll see what we can do!
				</p>
			</div>

			<div className='flex justify-center'>
				<div className='lg:flex'>
					<div className="card card-compact w-[90vw] lg:w-96  bg-base-100 shadow-xl my-5 lg:mx-5 rounded-[2.5rem] overflow-hidden mt-10">
						<div className="relative ">
							<div className='overlay' />
							<img src="/images/eventImages/selfieBooth01.jpg" alt="Shoes" className='rounded-[2.5rem] h-[400px] object-cover' />
							<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
								<p className={`${scriptFont.className} text-3xl text-center`}>Digital Booth</p>
							</div>

						</div>
						<div className="card-body">
							<p>With its sleek design, the digital booth packs a truly modern photo booth experience into a tiny footprint. The digital booth can take GIFs, boomerangs, and videos which guests can send to themselves imediately after</p>
							<div className="card-actions justify-center">
								<button className="btn btn-primary">Learn More</button>
							</div>
						</div>
					</div>

					<div className="card card-compact w-[90vw] lg:w-96  bg-base-100 shadow-xl my-5 lg:mx-5 rounded-[2.5rem] overflow-hidden mt-10">
						<div className="relative ">
							<div className='overlay' />
							<img src="/images/eventImages/premiumBooth01.jpg" alt="Shoes" className='rounded-[2.5rem] h-[400px] object-cover' />
							<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
								<p className={`${scriptFont.className} text-3xl text-center`}>Premium Photo Booth</p>
							</div>

						</div>
						<div className="card-body">
							<p>Our open-air photo booth provides everything you need to have the most powerful tower photo booth rental experience possible. Our Premium Photo Booth allows guests to take their images with a high quality DSLR camera, and print the photo strips on demand</p>
							<div className="card-actions justify-center">
								<button className="btn btn-primary">Learn More</button>
							</div>
						</div>
					</div>

					<div className="card card-compact w-[90vw] lg:w-96  bg-base-100 shadow-xl my-5 lg:mx-5 rounded-[2.5rem] overflow-hidden mt-10">
						<div className="relative ">
							<div className='overlay' />
							<img src="/images/eventImages/mirrorBooth01.png" alt="Shoes" className='rounded-[2.5rem] h-[400px] object-cover' />
							<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
								<p className={`${scriptFont.className} text-3xl text-center`}>Magic Mirror Booth</p>
							</div>

						</div>
						<div className="card-body">
							<p>Our Magic Mirror photo booth takes fun to another level with colorful animations and voice guidance. Participants engage in an interactive experience to create their photo keepsake. Most importantly, every Magic Mirror rental package is all-inclusive, so you can enjoy the event</p>
							<div className="card-actions justify-center">
								<button className="btn btn-primary">Learn More</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
	)
}

export default BoothServices