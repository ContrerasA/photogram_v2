import React from 'react'

import { scriptFont } from '@/src/utils/fontUtils'

import photoTemplates from '@/src/data/photoTemplates.json'

const PhotoTemplates = () => {
	return (
		<div className='w-full h-full text-center mt-10 flex flex-col items-center'>
			<div className='w-1/2'>
				<p className={`${scriptFont.className} text-6xl mb-5`}>Photo Templates</p>
				<p className="text-xl">
					No party is complete without custom photo templates. Included in the Premium Photo Booth & Magic Mirror is a personalized custom template to perfectly compliment your event.
				</p>
				<p>
					Below are some examples of templates available. We&apos;ll work with you ensure the photo template is perfect for your occasion.
				</p>
				<p>
					Each template is available in 2x6 and 4x6 format
				</p>
			</div>
			<div className='flex justify-center'>

				<div className='flex flex-wrap lg:m-20 lg:w-3/4 justify-center'>
					{
						photoTemplates.map(el => (
							<div key={el.id} className='p-10 flex flex-col items-center'>
								<img src={el.path} className='object-contain rounded-3xl h-[550px]' />
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

export default PhotoTemplates