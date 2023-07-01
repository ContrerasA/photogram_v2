import React from 'react'

import VideoHero from '@/components/Global/VideoHero'

import { GiPartyPopper } from 'react-icons/gi'
import { AiFillCamera } from 'react-icons/ai'

import { Nothing_You_Could_Do } from 'next/font/google'
import BoothPackages from '@/components/home/BoothPackages'
const scriptFont = Nothing_You_Could_Do({ subsets: ['latin'], weight: '400' })


const Parties = () => {
	return (
		<div>
			<VideoHero
				path="/videos/Promo02.mp4"
				heading="The Perfect Addition To Your Perfect Party"
				subtitle=""
			/>
			<div className=' flex justify-center mx-20'>
				<div className='flex text-center mt-20 justify-between space-x-48'>
					<div className='w-1/2'>
						<div className='flex flex-col items-center'>
							<GiPartyPopper size={56} className='mb-5' />
							<p className={`${scriptFont.className} text-6xl`}>
								Your Party!
							</p>
							<p>
								For your special celebration, entrust Photogram Booth to craft unforgettable memories. With our experienced team and state-of-the-art equipment, we provide a seamless and personalized experience, capturing the joy and laughter shared by you and your guests in stunning, high-quality photographs that will be cherished for years to come. Whether it's a festive party or a holiday gathering, Photogram Booth ensures that every moment is preserved with perfection and fondly remembered for a lifetime.
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
								Elevate your special occasion with our diverse range of booth options, each presenting its own distinct charm. The digital booth adds a modern twist, enabling guests to instantly share their captured moments on social media, while the classic photo print booth offers timeless, physical prints that can be cherished for years to come. For a touch of elegance and interactive fun, our mirror booth introduces a captivating element, engaging guests with interactive animations and personalized messages, ensuring an unforgettable addition to your party or holiday celebration.
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
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xl w-3/4'>
					<p className='text-white mb-3'>
					Our bar mitzvah was made even more memorable with the Photogram Booth experience! The booth looked fantastic, and our guests had a blast capturing fun-filled moments together. The high-quality prints serve as cherished mementos, ensuring that the joy and excitement of our celebration will be remembered for years to come. 
					</p>
					<p className={`${scriptFont.className} text-3xl mb-5 text-white text-right`}>- David Cohen</p>
				</div>
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

			<BoothPackages />

		</div>
	)
}

export default Parties