import React from 'react'

import boothData from '@/src/data/boothData.json'
import VideoHero from '@/components/global/VideoHero';
import { scriptFont } from '@/src/utils/fontUtils';
import BoothFeatures from '@/components/booths/boothFeatures';
import RequestQuote from '@/components/global/RequestQuote';
import ThreeBooth from '@/components/three/ThreeBooth';

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


const Page = async ({ params }: any) => {
	// @ts-ignore
	const data: BoothData = boothData.find(el => el.path === params.id);


	return (
		<>

			<VideoHero
				heading={data.videoHero.heading}
				subtitle={data.videoHero.subtitle}
				path={data.videoHero.path}
			/>

			<section>
				<ThreeBooth booth={params.id} />
			</section>

			<section>
				<div className="flex flex-col mt-10 w-full items-center">
					{data.marketingInfo.map((el, index) => (
						<div key={index} className='lg:w-full flex flex-col even:lg:flex-row lg:flex-row-reverse mt-10 justify-center items-center'>
							<div className="flex flex-col w-full lg:w-3/4 mx-20">
								<p className={`${scriptFont.className} text-4xl text-center`}>{el.title}</p>
								<p className=''>{el.description}</p>
							</div>
							<img src={el.imagePath} alt="" className='lg:rounded-[2.5rem] object-cover h-[350px] w-screen lg:w-[600px] mt-5 lg:mt-0' />
						</div>
					))}
				</div>

				<BoothFeatures
					booth={data.boothFeatures.booth}
					includedFeaturesDescription={data.boothFeatures.includedFeaturesDescription}
				/>

				<RequestQuote imagePath={data.quoteImagePath} />


			</section>
		</>

	)
}

export default Page



// export const getStaticPaths = async () => {
// 	let ids = boothData.map(el => el.path);

// 	const paths = ids.map(id => (
// 		{
// 			params:
// 				{ id: id.toString() }
// 		}))
// 	return {
// 		paths,
// 		fallback: false
// 	}
// }