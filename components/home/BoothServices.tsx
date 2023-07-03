import React from 'react'

import { Nothing_You_Could_Do } from 'next/font/google'
import Link from 'next/link'
const scriptFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })


const BoothServices = () => {
	return (
		<section id="booth-packages" className="m-auto mt-20 max-w-[90vw] ">
			<p className={`${scriptFont.className} text-5xl mb-5 text-center`}>
				Our Booth Services
			</p>
			<p className="text-center">
				Take a look at our services below. We&apos;re also able to cater to custom requests. Just shoot us a message, and we&apos;ll see what we can do!
			</p>

			<div className="flex flex-col lg:flex-row items-center justify-center space-x-10 mb-10 mt-5 mx-20">


				<div className="flex flex-col shadow-lg overflow-hidden rounded-[2.5rem] m-2 lg:mt-10">
					<div className="h-[571px] w-[428px] rounded-[2.5rem]  relative overflow-hidden ">
						<div className="overlay" />
						<img src="/images/eventImages/selfieBooth01.jpg" alt="" className="w-full h-full object-cover" />
						<div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex flex-col">
							<div className="flex-grow"></div>
							<div className="flex flex-col flex-end mb-10 justify-center items-center">
								<p className={`${scriptFont.className} text-5xl mb-5 text-center text-white`}>Digital Booth</p>
							</div>
						</div>
					</div>
					<div className="w-[428px] p-4 text-center text-sm flex flex-col flex-grow justify-center">
						<p className='flex-grow'>With its sleek design, the digital booth packs a truly modern photo booth experience into a tiny footprint. The digital booth can take GIFs, boomerangs, and videos which guests can send to themselves imediately after</p>
						<div className="flex justify-center">
							<Link href="/booths/digital-photo-booth" className='w-1/2 my-7'><button className="btn btn-primary w-full ">LEARN MORE</button></Link>
						</div>
					</div>
				</div>

				<div className="flex flex-col shadow-lg overflow-hidden rounded-[2.5rem] m-2">
					<div className="h-[571px] w-[428px] rounded-[2.5rem] relative overflow-hidden ">
						<div className="overlay" />
						<img src="/images/eventImages/premiumBooth01.jpg" alt="" className="w-full h-full object-cover" />
						<div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex flex-col">
							<div className="flex-grow"></div>
							<div className="flex flex-col flex-end mb-10 justify-center items-center">
								<p className={`${scriptFont.className} text-5xl mb-5 text-center text-white`}>Premium Photo Booth</p>
							</div>
						</div>
					</div>
					<div className="w-[428px] p-4 text-center text-sm flex flex-col flex-grow justify-center">
						<p className='flex-grow'>Our open-air photo booth provides everything you need to have the most powerful tower photo booth rental experience possible. Our Premium Photo Booth allows guests to take their images with a high quality DSLR camera, and print the photo strips on demand</p>
						<div className="flex justify-center">
						<Link href="/booths/premium-photo-booth" className='w-1/2 my-7'><button className="btn btn-primary w-full ">LEARN MORE</button></Link>
						</div>
					</div>
				</div>

				<div className="flex flex-col shadow-lg overflow-hidden rounded-[2.5rem] m-2 lg:mt-10">
					<div className="h-[571px] w-[428px] rounded-[2.5rem] relative overflow-hidden ">
						<div className="overlay" />
						<img src="/images/eventImages/mirrorBooth01.png" alt="" className="w-full h-full object-cover" />
						<div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full flex flex-col">
							<div className="flex-grow"></div>
							<div className="flex flex-col flex-end mb-10 justify-center items-center">
								<p className={`${scriptFont.className} text-5xl mb-5 text-center text-white`}>Magic Mirror</p>
							</div>
						</div>
					</div>
					<div className="w-[428px] p-4 text-center text-sm flex flex-col flex-grow justify-center">
						<p className='flex-grow'>Our Magic Mirror photo booth takes fun to another level with colorful animations and voice guidance. Participants engage in an interactive experience to create their photo keepsake. Most importantly, every Magic Mirror rental package is all-inclusive, so you can enjoy the event.</p>
						<div className="flex justify-center">
						<Link href="/booths/magic-mirror-photo-booth" className='w-1/2 my-7'><button className="btn btn-primary w-full ">LEARN MORE</button></Link>
							
						</div>
					</div>


				</div>

			</div>
		</section>
	)
}

export default BoothServices