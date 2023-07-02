import VideoHero from '@/components/Global/VideoHero'
import BoothFeatures from '@/components/booths/boothFeatures'
import { scriptFont } from '@/src/Utils/FontUtils'
import React from 'react'

const DigitalBooth = () => {
	return (
		<section>
			<VideoHero heading={'Mirror, Pose, Share'} subtitle={'Create Magical Memories with our Interactive Photo Booth'} path={'/videos/boothPromoVideos/MagicMirrorBothPromoVideo01.mp4'} />
			<div className='flex mt-20 justify-center items-center space-x-20 w-[66vw] h-[33vh] m-auto'>
				<img src="/images/eventImages/premiumBooth/PXL_20220925_024540750.NIGHT.jpg" alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />
				<div>
					<p className={`${scriptFont.className} text-4xl`}>
						Premium Photo Booth Rentals
					</p>
					<p>
					Our open-air photo booth provides everything you need to have the most powerful tower photo booth rental experience possible. Choose from our wide variety of backdrops, let us design your custom photo template, and enjoy our carefully chosen props. It is, without a doubt, the best selfie station you could hope for.
					</p>
				</div>
			</div>
			<div className='flex mt-20 justify-center items-center space-x-20 w-[66vw] h-[33vh] m-auto'>
				<div>
					<p className={`${scriptFont.className} text-4xl`}>
					Open-Air Photo Booth Rentals
					</p>
					<p>
					Sick of low-quality photo booth equipment? Our top-of-the-line equipment will raise the bar at your event, complementing any venue. Furthermore, our easy-to-use software will let guests enjoy the age-old concept of instant photos AND enjoy an animated GIF booth rental, all-in-one.
					</p>
				</div>
				<img src="/images/eventImages/premiumBooth/family01.jpg" alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />

			</div>
			<div className='flex mt-20 justify-center items-center space-x-20 w-[66vw] h-[33vh] m-auto'>
			<img src="/images/eventImages/premiumBooth/socialMediaSharing.jpg" alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />
				<div>
					<p className={`${scriptFont.className} text-4xl`}>
					Party Photo Booth Rentals
					</p>
					<p>
					Our powerful photo booth software makes it easy for your guests to email and text their favorite photos to themselves. As long as their is reliable internet at your venue, we include this at no additional cost, every time.
					</p>
				</div>
			</div>
			<div className='flex mt-20 justify-center items-center space-x-20 w-[66vw] h-[33vh] m-auto'>
				<div>
					<p className={`${scriptFont.className} text-4xl`}>
					Social Media Sharing
					</p>
					<p>
					After your event, we will send you a link to all of the printed collages as well as the original photos. These make great assets for any branding photo booth, and even better memories if you're looking for a wedding photo booth rental.
					</p>
				</div>
				<img src="/images/eventImages/premiumbooth/imageAlbum.jpg" alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />
			</div>

			<BoothFeatures
				booth='mirrorBooth'
				includedFeaturesDescription='The Following Features Are Included In Our Magic Mirror Photo Booth Packages'
			/>


		</section>
	)
}

export default DigitalBooth