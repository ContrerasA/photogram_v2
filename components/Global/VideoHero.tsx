import { scriptFont } from '@/src/utils/fontUtils'
import Link from 'next/link'
import React from 'react'

export type ButtonInformation = {
	text: string,
	path: string
}

export type VideoHeroProps = {
	heading: string
	subtitle: string
	path: string,
	button?: ButtonInformation
}

const VideoHero = (props: VideoHeroProps) => {
	return (
		<div className='relative h-screen '>
			<video className=' h-full w-full object-cover' muted autoPlay loop>
				<source src={props.path} />
			</video>
			<div className="overlay" />
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
				<p className={`${scriptFont.className} text-6xl font-bold text-white mb-5`}>{props.heading}</p>
				<p className="text-xl text-white">{props.subtitle}</p>
				<div className="flex w-full h-full items-center justify-center">
					<div className="flex flex-col w-1/2 m-3 space-y-3">
						{props.button && (
							<button className="btn ">
								<Link href={props.button.path}>
								{props.button.text}
								</Link>
							</button>
						)}
						<button className="btn btn-primary">
							<Link href="#request-quote">
								Instant Quote
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoHero;