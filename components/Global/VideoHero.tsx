import React from 'react'

export type VideoHeroProps = {
	heading: string
	subtitle: string
	path: string
}

const VideoHero = (props: VideoHeroProps) => {
	return (
		<div className='relative h-screen '>
			<video className=' h-full w-full object-cover' muted autoPlay loop>
				<source src={props.path} />
			</video>
			<div className="overlay" />
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
				<p className="text-4xl font-bold text-white">{props.heading}</p>
				<p className="text-xl font-bold text-white">{props.subtitle}</p>
				<div className="flex w-full h-full items-center justify-center">
					<div className="flex flex-col w-1/2 m-3 space-y-3">
						<button className="btn ">Photo Booth Packages</button>
						<button className="btn btn-primary ">Check Availability</button>
						<button className="btn  ">Book Now</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoHero;