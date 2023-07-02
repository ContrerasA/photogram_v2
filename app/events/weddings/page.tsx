import VideoHero from '@/components/global/VideoHero'
import React from 'react'

import { GiBigDiamondRing } from 'react-icons/gi'
import { AiFillCamera } from 'react-icons/ai'

import { Nothing_You_Could_Do } from 'next/font/google'
import BoothPackages from '@/components/home/BoothPackages'
import BoothFeatures from '@/components/booths/boothFeatures'
import RequestQuote from '@/components/global/RequestQuote'
const scriptFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })


const weddings = () => {
	return (
		<div>
			<VideoHero
				path="/videos/Promo03.mp4"
				heading="The Perfect Compliment to your Perfect Wedding"
				subtitle=""
				button={{text: 'Photo Booth Packages', path: '#booth-packages'}}
			/>
			<div className=' flex justify-center mx-20'>
				<div className='flex text-center mt-20 justify-between space-x-48'>
					<div className='w-1/2'>
						<div className='flex flex-col items-center'>
							<GiBigDiamondRing size={56} className='mb-5' />
							<p className={`${scriptFont.className} text-6xl`}>Your Wedding</p>
							<p>For your special day, trust Photogram Booth to create unforgettable wedding memories. With our expert team and top-of-the-line equipment, we offer a seamless and personalized experience, capturing the joy and love shared by you and your guests in stunning, high-quality photographs that will be treasured for a lifetime.</p>
						</div>
					</div>
					<div className='w-1/2'>
						<div className='flex flex-col items-center'>
							<AiFillCamera size={56} className='mb-5' />
							<p className={`${scriptFont.className} text-6xl`}>Our Booths</p>
							<p>
								Elevate your wedding day with our range of booth options, each offering its own unique charm. The digital booth brings a modern twist, allowing guests to instantly share their captured moments on social media, while the classic photo print booth provides nostalgic, tangible prints that can be cherished for years to come. For a touch of elegance and interactive fun, our mirror booth adds a captivating element, engaging guests with interactive animations and personalized messages, making it a truly unforgettable addition to your wedding celebration.</p>
						</div>
					</div>

				</div>
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
				<img src="/images/promoImages/eventsPromo.jpg" alt="" className='w-screen ' />
				<div className="overlay" />
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xl w-3/4'>
					<p className='text-white mb-3'>We are so glad we chose the premium photo booth from Photogram Booth for our wedding! The booth looked elegant and fit seamlessly with our wedding theme. Our guests had a blast taking fun photos with the props and personalized filters, and the prints turned out beautifully. The attendant was friendly and helpful, ensuring everything ran smoothly. Having the photo booth was a fantastic addition to our wedding, and we now have a collection of hilarious and heartfelt moments captured in the prints. Highly recommended for anyone looking to add an extra element of joy and entertainment to their special day!</p>
					<p className={`${scriptFont.className} text-3xl mb-5 text-white text-right`}>- Emily Thompson</p>
				</div>
			</div>

			{/* Features */}
			<BoothFeatures booth='premiumBooth'/>			

			<RequestQuote imagePath='/images/eventImages/premiumBooth01.jpg'/>
			<BoothPackages />

		</div>
	)
}

export default weddings