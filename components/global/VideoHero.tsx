'use client';

import { scriptFont } from '@/src/utils/fontUtils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

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

interface WindowSize {
	height?: number,
	width?: number
}

const VideoHero = (props: VideoHeroProps) => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		height: 1000
	})

	useEffect(() => {
		setWindowSize({ height: window.innerHeight })

	}, [])

	return (
		<div className={`relative`}>

			<video   src={props.path} autoPlay muted loop className={`h-[750px] lg:h-[1000px] object-cover`}></video>
			
			<div className="overlay" />
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center h-1/2">
				<p className={`${scriptFont.className} md:text-6xl font-bold text-white mb-5`}>{props.heading}</p>
				<p className="text-xl text-white">{props.subtitle}</p>
				<div className="flex w-full  items-center justify-center">
					<div className="flex flex-col w-1/2  space-y-3">
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