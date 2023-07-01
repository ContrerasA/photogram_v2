import React from 'react'

import { scriptFont } from '@/src/Utils/FontUtils'

import galleryImages from '@/src/data/galleryImages.json'

const Gallery = () => {
	return (
		<div className='w-full h-full text-center mt-10'>
			<p className={`${scriptFont.className} text-6xl mb-5`}>Gallery</p>
			<p>Here are a few shots of our guests having a blast in in our Photogram Photo Booths</p>
			<div className='flex justify-center'>

			<div className='flex flex-wrap m-20 w-3/4'>
				{
					galleryImages.map(el => (
						<div key={el.id} className='basis-1/4 p-10'>
							<img src={el.path} alt={el.ariaText} className='object-cover rounded-3xl h-[275px] w-[275px]'/>
						</div>
					))
				}
			</div>

				</div>

		</div >
	)
}

export default Gallery