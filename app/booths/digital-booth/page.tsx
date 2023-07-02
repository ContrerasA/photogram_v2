import VideoHero from '@/components/global/VideoHero'
import BoothFeatures from '@/components/booths/boothFeatures'
import { scriptFont } from '@/src/Utils/FontUtils'
import React from 'react'
import RequestQuote from '@/components/global/RequestQuote'

const DigitalBooth = () => {
	return (
		<section>
			<VideoHero
				heading={'Picture Perfect Fun'}
				subtitle={'Unforgettable Moments with our Digital Photo Booth'}
				path={'/videos/boothPromoVideos/DigitalBoothPromoVideo01.mp4'}
			/>
			<div className='flex mt-20 justify-center items-center space-x-20 w-[66vw] h-[33vh] m-auto'>
				<img src="/images/eventImages/digitalbooth03.jpg" alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />
				<div>
					<p className={`${scriptFont.className} text-4xl`}>
						Digital Photo Booth
					</p>
					<p>
						With its sleek design, the digital booth packs a truly modern photo booth experience into a tiny footprint. Beyond traditional photos, the digital booth can take GIFs, boomerangs, and videos so you can turn your digital booth rental into a GIF booth rental, boomerang booth rental - or even enable all of them at once! Complete with built in sharing tools, sharing your photos has never been easier. Send your favorite snaps via text, email and airdrop with the push of a button and relive your favorite moments.
					</p>
				</div>
			</div>
			<div className='flex mt-20 justify-center items-center space-x-20 w-[66vw] h-[33vh] m-auto'>
				<div>
					<p className={`${scriptFont.className} text-4xl`}>
						Photo, GIFs, Boomerangs and Videos
					</p>
					<p>
						Can't decide what kind of booth you want for your event? Don't! With our digital photo booth rental you get a GIF booth, Boomerang booth, video booth all in one!
					</p>
				</div>
				<img src="/images/eventImages/digitalBooth/promoImg01.jpg" alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />
			</div>
			<div className='flex mt-20 justify-center items-center space-x-20 w-[66vw] h-[33vh] m-auto'>
				<img src="/images/eventImages/digitalBooth/promoImg02.jpg" alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />
				<div>
					<p className={`${scriptFont.className} text-4xl`}>
						Social Media Sharing
					</p>
					<p>
					Participants can send selfies, group photos, GIFs, and videos to themselves or their friends in seconds. The digital booth texts, emails and airdrops post-ready files so guests can post to any social media platform with the click of a button.
					</p>
				</div>
			</div>
			<div className='flex mt-20 justify-center items-center space-x-20 w-[66vw] h-[33vh] m-auto'>
				<div>
					<p className={`${scriptFont.className} text-4xl`}>
						Customizable Booth Rental
					</p>
					<p>
						Make the digital booth yours, from the booth features to the content your guests create. Change the start screen to reflect the vibe of your event or send a custom message with each photo share. Looking for a GIF booth rental or boomerang booth rental? Enable these features and let your guests decide how they want to capture the moment.
					</p>
				</div>
				<img src="/images/eventImages/digitalBooth/promoImg03.jpg" alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />
			</div>

			<BoothFeatures
				booth='digitalBooth'
				includedFeaturesDescription='The Following Features Are Included In Our Digital Booth Packages'
			/>

			<RequestQuote imagePath='/images/eventImages/corporate01.jpeg'/>
		</section>
	)
}

export default DigitalBooth