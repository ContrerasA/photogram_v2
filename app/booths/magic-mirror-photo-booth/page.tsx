import VideoHero from '@/components/global/VideoHero'
import BoothFeatures from '@/components/booths/boothFeatures'
import { scriptFont } from '@/src/Utils/FontUtils'
import React from 'react'
import RequestQuote from '@/components/global/RequestQuote'

const DigitalBooth = () => {
	return (
		<section>
			<VideoHero heading={'Mirror, Pose, Share'} subtitle={'Create Magical Memories with our Interactive Photo Booth'} path={'/videos/boothPromoVideos/MagicMirrorBothPromoVideo01.mp4'} />
			<div className='flex mt-20 justify-center items-center space-x-20 w-[66vw] h-[33vh] m-auto'>
				<img src="/images/eventImages/premiumBooth/PXL_20220925_024540750.NIGHT.jpg" alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />
				<div>
					<p className={`${scriptFont.className} text-4xl`}>
						Interactive Magic Mirror
					</p>
					<p>
						Your guests will love personalizing their photo with a signature. With this built-in feature, the magic mirror photo booth rental allows your guests to draw or sign directly on the mirror. Their creation is then printed on the photo.
					</p>
				</div>
			</div>
			<div className='flex mt-20 justify-center items-center space-x-20 w-[66vw] h-[33vh] m-auto'>
				<div>
					<p className={`${scriptFont.className} text-4xl`}>
						Text and Email Photo Sharing
					</p>
					<p>
						With the selfie mirror photo booth rental, participants can send selfies, GIFs, and videos in seconds. The magic mirror texts and emails from it's massive animated touch screen.
					</p>
				</div>
				<img src="/images/promoImages/mirrorBooth/mirrorPromo01.jpg" alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />

			</div>
			<div className='flex mt-20 justify-center items-center space-x-20 w-[66vw] h-[33vh] m-auto'>
				<img src="/images/promoImages/mirrorBooth/mirrorPromo02.jpg" alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />
				<div>
					<p className={`${scriptFont.className} text-4xl`}>
						Customizable Animations
					</p>
					<p>
						The magic selfie mirror photo booth rental is fully customizable for your event. We can add custom graphics, enable interactive games, create motion triggered animations, enable photo filters, and even add a scream contest! Corporate Event? The Mirror Booth has several branding opportunities and can even do lead capture.
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
				<img src="/images/promoImages/mirrorBooth/mirrorPromo03.jpg" alt="" className='rounded-[2.5rem] w-1/2 object-cover max-h-full' />
			</div>

			<BoothFeatures
				booth='mirrorBooth'
				includedFeaturesDescription='The Following Features Are Included In Our Magic Mirror Photo Booth Packages'
			/>

			<RequestQuote imagePath='/images/eventImages/mirrorBooth01.png' />


		</section>
	)
}

export default DigitalBooth