import React from 'react'

import { scriptFont } from '@/src/Utils/FontUtils'

import backdropImages from '@/src/data/backdropImages.json'

const Gallery = () => {

	const standardBackdrops = backdropImages.filter(el => el.type === "standard");
	const premiumBackdrops = backdropImages.filter(el => el.type === "premium");

	return (
		<div className='w-full h-full text-center mt-10'>
			<p className={`${scriptFont.className} text-6xl mb-5`}>Gallery</p>
			<p>Here are a few shots of our guests having a blast in in our Photogram Photo Booths</p>
			<div className='flex flex-col items-center justify-center'>
				<p className={`${scriptFont.className} text-3xl mt-20`}>Standard Backdrops</p>

				<div className='flex flex-wrap w-3/4'>
					{
						standardBackdrops.map(el => (
							<div key={el.id} className='basis-1/4 p-10'>
								<img src={el.path} className='object-cover rounded-3xl h-[275px] w-[275px]' />
								<p>• {el.name}</p>
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
							<div key={el.id} className='basis-1/4 p-10'>
								<img src={el.path} className='object-cover rounded-3xl h-[275px] w-[275px]' />
								<p>• {el.name}</p>
							</div>
						))
					}
				</div>

			</div>

		</div >
	)
}

export default Gallery