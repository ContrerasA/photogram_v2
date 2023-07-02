import React from 'react'

import VideoHero from '@/components/global/VideoHero'

import { GiBriefcase } from 'react-icons/gi'
import { AiFillCamera } from 'react-icons/ai'

import { Nothing_You_Could_Do } from 'next/font/google'
const scriptFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })

import BoothServices from '@/components/home/BoothServices'
import RequestQuote from '@/components/global/RequestQuote'


const CorporateEvents = () => {
	return (
		<div>
			<VideoHero
				path="/videos/Promo04.mp4"
				heading="An Excellent Addition To Your Corporate Party"
				subtitle=""
				button={{ text: 'Photo Booth Packages', path: '#booth-packages' }}
			/>
			<div className=' flex justify-center mx-20'>
				<div className='flex text-center mt-20 justify-between space-x-48'>
					<div className='w-1/2'>
						<div className='flex flex-col items-center'>
							<GiBriefcase size={56} className='mb-5' />
							<p className={`${scriptFont.className} text-6xl`}>
								Your Party!
							</p>
							<p>
								Take your corporate party to the next level with the Photogram Booth experience! Our sleek and professional booth adds a touch of excitement, allowing colleagues to bond and capture fun memories together. With high-quality prints and a seamless experience, Photogram Booth is a must-have addition for corporate events that want to create a vibrant and engaging atmosphere.
							</p>
						</div>
					</div>
					<div className='w-1/2'>
						<div className='flex flex-col items-center'>
							<AiFillCamera size={56} className='mb-5' />
							<p className={`${scriptFont.className} text-6xl`}>
								Our Booths
							</p>
							<p>
								Add a touch of distinction to your corporate event with our range of booth options. The digital booth lets guests instantly share moments on social media, the classic photo print booth provides timeless prints, and the mirror booth offers interactive animations and personalized messages. Elevate your corporate celebration with Photogram Booth for an unforgettable experience.
							</p>
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
			</div>

			{/* Features */}
			<div className='flex flex-col items-center mt-20'>
				<p className={`${scriptFont.className} text-6xl mb-5`}>Included Features</p>
				<p>The Following Features Are Included In The Preimum And Magic Mirror Photo Booth Package</p>
				<div className='flex flex-wrap mx-20 space-x-10 justify-center'>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10'>
						<img src="/images/promoImages/weddingPhotoTemplateExample.jpg" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• Custom Photo Templates</p>
					</div>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10'>
						<img src="/images/promoImages/groupPhoto02.jpg" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• Party Props</p>
					</div>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10'>
						<img src="/images/backdrops/whitefloral_osrnmc.jpg" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• Backdrops</p>
					</div>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10'>
						<img src="/images/promoImages/DslrCamera.png" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• High Quality Pictures</p>
					</div>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10'>
						<img src="/images/promoImages/kardashianFilter.jpg" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• Filters</p>
					</div>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10'>
						<img src="/images/promoImages/weddingPhotoStrips.jpg" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• Unlimited Prints</p>
					</div>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10'>
						<img src="/images/promoImages/photoBoothAttendant.jpg" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• Photo Booth Attendant</p>
					</div>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10'>
						<img src="/images/promoImages/socialMediaIcons.png" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• Instant Digital Photos</p>
					</div>
				</div>
			</div>

			<div className='flex flex-col items-center mt-20'>
				<p className={`${scriptFont.className} text-6xl mb-5`}>Additional Optional Features</p>
				<p>The Following Optional Features Are For The Preimum And Magic Mirror Photo Booth Package</p>
				<div className='flex flex-wrap mx-20 space-x-10 justify-center'>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10 rounded-xl '>
						<img src="/images/promoImages/4x6wedding.jpg" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• 4x6 Photo Prints</p>
					</div>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10 rounded-xl '>
						<img src="/images/promoImages/scrapbook.png" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• Scrapbook</p>
					</div>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10 rounded-xl '>
						<img src="/images/promoImages/greenScreen.png" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• Green Screen</p>
					</div>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10 rounded-xl '>
						<img src="/images/promoImages/wifiHotSpot.png" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• WiFi Hotspot</p>
					</div>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10 rounded-xl '>
						<img src="/images/promoImages/weddingLedNeonSign.jpg" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• Custom Props & Signs</p>
					</div>
					<div className='w-1/4 text-center flex flex-col items-center space-y-4 mt-10 rounded-xl '>
						<img src="/images/backdrops/grassBackdrop.jpg" alt="" className='h-[233px] w-[350px] object-cover rounded-3xl' />
						<p>• Premium Backdrops</p>
					</div>
				</div>
			</div>

			<BoothServices />
			<RequestQuote imagePath='/images/eventImages/premiumBooth01.jpg' />

		</div>
	)
}

export default CorporateEvents