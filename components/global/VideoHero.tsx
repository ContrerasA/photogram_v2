'use client';

import { scriptFont } from '@/src/utils/fontUtils'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
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
	const [res, setRes] = useState("");

	useEffect(() => {
		const video = document.querySelector('video');
		if (!video?.hasAttribute('autoplay')) {
			console.log("didn't have muted")
			video?.setAttribute("muted", "true");
			setRes("wasn't muted")
		} else {
			console.log("already muted")
			setRes("was muted")
		}
	})


	return (
		<div className={`relative`}>
			<video autoPlay={true} playsInline={true} loop={true} muted={true} className={`h-[750px] lg:h-[1000px] w-screen object-cover`}>
				<source src={props.path} />
			</video>
			<div className="overlay" />
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center h-1/2 w-3/4 lg:px-10 ">
				<p className={`${scriptFont.className} text-4xl md:text-6xl font-bold text-white mb-5`}>{props.heading}</p>
				<p className="text-xl text-white pt-3">{props.subtitle}</p>
				<div className="flex w-full  items-center justify-center mt-5">
					<div className="flex flex-col md:w-1/2  space-y-3 items-center">
						{props.button && (
							<button className="btn  w-64">
								<Link href={props.button.path}>
									{props.button.text}
								</Link>
							</button>
						)}
						<button className="btn btn-primary w-64">
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