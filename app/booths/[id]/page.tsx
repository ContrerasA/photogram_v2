import React from 'react'

import boothData from '@/src/data/boothData.json'
import VideoHero from '@/components/global/VideoHero';
import { scriptFont } from '@/src/Utils/FontUtils';
import BoothFeatures from '@/components/booths/boothFeatures';
import RequestQuote from '@/components/global/RequestQuote';

interface BoothData {
	id: string
	path: string
	name: string
	description: string
	quoteImagePath: string
	productImage: string
	videoHero: {
		heading: string
		subtitle: string
		path: string
	}
	marketingInfo: [
		{
			title: string
			description: string
			imagePath: string
		}
	],
	boothFeatures: {
		booth: "digitalBooth" | "premiumBooth" | "mirrorBooth"
		includedFeaturesDescription: string
	}
}


const Page = async ({ params }) => {
	// @ts-ignore
	const data: BoothData = boothData.find(el => el.path === params.id);


	return (
		<section>
			<VideoHero
				heading={data.videoHero.heading}
				subtitle={data.videoHero.subtitle}
				path={data.videoHero.path}
			/>
			<div className='flex mt-20 justify-center items-center space-x-20 w-[66vw] h-[33vh] m-auto'>
				<img src="/images/eventImages/digitalbooth03.jpg" alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />
				<div>
					<p className={`${scriptFont.className} text-4xl`}>{data.name}</p>
					<p>{data.description}</p>
				</div>

			</div>
			<div>

				{data.marketingInfo.map((el, index) => (
					<div className='flex even:flex-row-reverse mt-20 justify-center items-center w-[66vw] h-[33vh] m-auto'>
						<div className='mx-10'>
							<p className={`${scriptFont.className} text-4xl`}>{el.title}</p>
							<p className='w-2/3'>{el.description}</p>
						</div>
						<img src={el.imagePath} alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />
					</div>
				))}
			</div>

			<BoothFeatures
				booth={data.boothFeatures.booth}
				includedFeaturesDescription={data.boothFeatures.includedFeaturesDescription}
			/>

			<RequestQuote imagePath={data.quoteImagePath} />


		</section>
	)
}

export default Page



export const getStaticPaths = async () => {
	let ids = boothData.map(el => el.path);

	const paths = ids.map(id => (
		{
			params:
				{ id: id.toString() }
		}))
	return {
		paths,
		fallback: false
	}
}