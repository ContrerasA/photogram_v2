import VideoHero from '@/components/global/VideoHero'
import React from 'react'

import { GiBigDiamondRing } from 'react-icons/gi'
import { AiFillCamera } from 'react-icons/ai'

import { Nothing_You_Could_Do } from 'next/font/google'
import BoothServices from '@/components/home/BoothServices'
import BoothFeatures from '@/components/booths/boothFeatures'
import RequestQuote from '@/components/global/RequestQuote'
const scriptFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })

import eventsMarketingData from '@/src/data/eventsMarketingData.json';

interface EventData {
	id: number,
	name: string,
	requestQuoteImagePath: string,
	reviewImagePath: string,
	videoHero: {
		heading: string
		subtitle: string
		path: string
		button: {
			text: string
			path: string
		}
	},
	about: [
		{
			title: string,
			description: string,
			iconPath: string
		}
	],
	review: {
		name: string
		review: string
	}
}

const Events = ({ params }) => {
	// @ts-ignore
	const data: EventData = eventsMarketingData.find(el => el.path === params.id);


	return (
		<div>
			<VideoHero
				path={data.videoHero.path}
				heading={data.videoHero.heading}
				subtitle={data.videoHero.subtitle}
				button={{ text: data.videoHero.button.text, path: data.videoHero.button.path }}
			/>

			<div className='flex flex-col lg:flex-row mt-20 justify-center lg:space-x-40 max-w-[90vw] mx-auto space-y-10 lg:space-y-0'>
				{data.about.map(el => (
					<div className='w-full lg:w-1/3 flex flex-col items-center text-center h-full '>
						<img src={el.iconPath} alt="" width={96} className='flex-grow mb-5' />
						<p className={`${scriptFont.className} text-6xl`}>{el.title}</p>
						<p className=''>{el.description}</p>
					</div>
				))}
			</div>


			{/* Events Promo Image */}
			<div className='relative'>
				<div className='absolute h-[255px] z-20'>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none" className='h-[100px] w-full' >
						<path fill="rgba(255, 255, 255, 1)" d="M0 0L2600 0 2600 69.1 0 0z"></path>
						<path fill="rgba(255, 255, 255, 1)" style={{ opacity: 0.75 }} d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
						<path fill="rgba(255, 255, 255, 1)" style={{ opacity: 0.50 }} d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
					</svg>
				</div>
				<img src={data.reviewImagePath} alt="" className='w-screen ' />
				<div className="overlay" />
				{data.review && (
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xl w-3/4'>
						<p className='text-white mb-3'>{data.review.review}</p>
						<p className={`${scriptFont.className} text-3xl mb-5 text-white text-right`}>- {data.review.name}</p>
					</div>
				)}
			</div>

			{/* Features */}
			<BoothFeatures booth='premiumBooth' />
			<RequestQuote imagePath='/images/eventImages/premiumBooth01.jpg' />
			<BoothServices />

		</div>
	)
}

export default Events

export const getStaticPaths = async () => {
	let ids = eventsMarketingData.map(el => el.path);

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