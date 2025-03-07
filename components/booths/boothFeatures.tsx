import { scriptFont } from '@/src/utils/fontUtils'
import React from 'react'

import boothFeatures from '@/src/data/boothFeatures.json';

interface PropsType {
	booth: 'digitalBooth' | 'premiumBooth' | 'mirrorBooth',
	includedFeaturesDescription?: string
	optionalFeaturesDescription?: string
}

const BoothFeatures = (props: PropsType) => {

	const requestedBoothFeatures = boothFeatures.filter(el => el.applicableBooths.includes(props.booth));
	const includedFeatures = requestedBoothFeatures.filter(el => el.featureType === 'included')
	const OptionalFeatures = requestedBoothFeatures.filter(el => el.featureType === 'optional')

	return (
		<section>
			<div className='flex flex-col items-center mt-20 text-center'>
				<p className={`${scriptFont.className} text-6xl mb-5`}>Included Features</p>
				{props.includedFeaturesDescription ?
					<p>{props.includedFeaturesDescription}</p>
					:
					<p>The Following Features Are Included In Preimum And Magic Mirror Photo Booth Packages</p>
				}
				<div className='flex flex-wrap justify-center'>
					{includedFeatures.map((el, index) => (
						<div key={index} className='lg:w-1/4 mx-4 text-center flex flex-col items-center space-y-4 mt-10'>
							<img src={el.imagePath} alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
							<div className='flex justfify-center'>
								<span className='text-primary'>•</span>
								<p>&nbsp;{el.description}&nbsp;</p>
								<span className='text-primary'>•</span>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='flex flex-col items-center mt-20 text-center'>
				<p className={`${scriptFont.className} text-6xl mb-5`}>Optional Features</p>
				{props.optionalFeaturesDescription ?
					<p>{props.optionalFeaturesDescription}</p>
					:
					<p>The Following Optional Features Are For Premium And Magic Mirror Photo Booth Packages</p>
				}
				<div className='flex flex-wrap justify-center'>
					{OptionalFeatures.map((el, index) => (
						<div key={index} className='lg:w-1/4 mx-4 text-center flex flex-col items-center space-y-4 mt-10'>
							<img src={el.imagePath} alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
							<div className='flex justfify-center'>
								<span className='text-primary'>•</span>
								<p>&nbsp;{el.description}&nbsp;</p>
								<span className='text-primary'>•</span>
							</div>
							{/* <p className=''><span className='text-primary'>•</span> {el.description} <span className='text-primary'>•</span></p> */}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default BoothFeatures