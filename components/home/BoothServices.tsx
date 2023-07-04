import React from 'react'

import { Nothing_You_Could_Do } from 'next/font/google'
import Link from 'next/link'
const scriptFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })

import boothServices from '@/src/data/boothServices.json'

const BoothServices = () => {
	return (
		<section id="booth-packages" className="">
			<div>
				<p className={`${scriptFont.className} text-5xl mb-5 text-center`}>
					Our Booth Services
				</p>
				<p className="text-center">
					Take a look at our services below. We&apos;re also able to cater to custom requests. Just shoot us a message, and we&apos;ll see what we can do!
				</p>
			</div>

			<div className='flex justify-center'>
				<div className='lg:flex max-w-[90vw]'>
					{boothServices.map((el, index) => (
						<div key={index} className="card card-compact w-[90vw] lg:w-96  bg-base-100 shadow-xl my-5 lg:mx-5 rounded-[2.5rem] overflow-hidden mt-10">
							{/* <div className="card card-compact w-[90vw] lg:w-96  bg-base-100 shadow-xl my-5 lg:mx-5 rounded-[2.5rem] overflow-hidden mt-10"> */}
							<div className="relative ">
								<div className='overlay' />
								<img src={el.imagePath} alt="Shoes" className='rounded-[2.5rem] h-[400px] object-cover' />
								<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
									<p className={`${scriptFont.className} text-3xl text-center`}>{el.name}</p>
								</div>

							</div>
							<div className="card-body">
								<p>{el.description}</p>
								<div className="card-actions justify-center">
									<Link href={el.linkPath}><button className="btn btn-primary">Learn More</button></Link>
								</div>
							</div>
						</div>
					))}

				</div>
			</div>

		</section>
	)
}

export default BoothServices