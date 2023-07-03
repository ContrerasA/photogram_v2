import React from 'react'

import { scriptFont } from '@/src/Utils/FontUtils'

import backdropImages from '@/src/data/backdropImages.json'

const Gallery = () => {

	const standardBackdrops = backdropImages.filter(el => el.type === "standard");
	const premiumBackdrops = backdropImages.filter(el => el.type === "premium");

	return (
		<div className='w-full h-full text-center mt-10'>
			<p className={`${scriptFont.className} text-6xl mb-5`}>Backdrops</p>
			<p>Below is a list of backdrops you can choose from for your event</p>
			<div className='flex flex-col items-center justify-center'>
				<p className={`${scriptFont.className} text-3xl mt-20`}>Standard Backdrops</p>

				<div className='flex flex-wrap w-3/4'>
					{
						standardBackdrops.map(el => (
							<div key={el.id} className='flex flex-col items-center p-5'>
								<img src={el.path} className='object-cover rounded-3xl lg:h-[275px] lg:w-[275px] w-[90vw]' />
								<div className='flex justfify-center'>
									<span className='text-primary'>•</span>
									<p>&nbsp;{el.name}&nbsp;</p>
									<span className='text-primary'>•</span>
								</div>
							</div>
						))
					}
				</div>
			</div>

			<div className='flex flex-col items-center justify-center'>
				<p className={`${scriptFont.className} text-3xl mt-20`}>Premium Backdrops</p>

				<div className='flex flex-wrap w-3/4'>
					{
						premiumBackdrops.map(el => (
							<div key={el.id} className='flex flex-col items-center p-5'>
								<img src={el.path} className='object-cover rounded-3xl lg:h-[275px] lg:w-[275px] w-[90vw]' />
								<div className='flex justfify-center'>
									<span className='text-primary'>•</span>
									<p>&nbsp;{el.name}&nbsp;</p>
									<span className='text-primary'>•</span>
								</div>
							</div>
						))
					}
				</div>
			</div>

		</div >
	)
}

export default Gallery