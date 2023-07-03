import React from 'react'
import { AiFillStar } from 'react-icons/ai'

import { scriptFont } from '@/src/utils/FontUtils'



const ServicesDescription = () => {
	return (
		<section className="flex flex-col items-center justify-center w-full mt-20">
			{/* Stars */}
			<div className="flex justify-center text-4xl text-yellow-300 mb-5">
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
			</div>
			<div className="text-center my-5 max-w-[90vw] lg:max-w-[66vw]">
				<p className={`${scriptFont.className} text-5xl mb-5`}>
					Picture Perfect Photo Booth Packages
				</p>

				<p className="mb-5">
					Welcome to Photohram Booth, where unforgettable memories come to life! With our open-air booths, we capture stunning pictures that beautifully encapsulate the joy and laughter of your guests. From spontaneous snapshots to heartfelt moments, our booths are the perfect addition to any event, ensuring an experience filled with cherished memories that will last a lifetime.
				</p>
				<p className="">
					At our Photogram Booth, we pride ourselves on delivering excellence through every click. Our state-of-the-art equipment ensures that every picture taken is of the highest quality, capturing the finest details and vibrant colors. Moreover, our dedicated attendants are committed to providing an effortless and stress-free experience, handling all the logistics and ensuring that your guests can focus on enjoying the moment while we take care of the rest.
				</p>
			</div>
		</section>
	)
}

export default ServicesDescription