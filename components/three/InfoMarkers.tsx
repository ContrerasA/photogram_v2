'use client';
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Vector3 } from 'three'

export interface InfoMarker {
	name: string
	description: string
	position: Vector3
	setActiveInfoMarker: any
	boothData: any
}

const InfoMarkers = (props: InfoMarker) => {
	const [active, setActive] = useState<boolean>(false);
	const [hovered, setHovered] = useState<boolean>(false);
	const htmlRef = useRef();
	let parentEl: any = null;

	function refresh() {
		if (htmlRef && htmlRef.current) {
			if (parentEl == null) {
				// @ts-ignore
				parentEl = htmlRef.current.parentNode;
			}

			if (!hovered) {
				parentEl.style.zIndex = "0";
			}
		}
	}

	useFrame(() => {
		refresh();
	})

	return (
		// @ts-ignore
		<Html ref={htmlRef} position={props.position} className='select-none cursor-pointer'  >

			<AiOutlineInfoCircle
				onMouseOver={() => setHovered(true)}
				onMouseOut={() => setHovered(false)}
				onClick={() => props.setActiveInfoMarker(props.boothData)}
				// onClick={() => props.setActiveInfoMarker(props)}
				// onClick={() => setActive(true)}
				className={`${active && 'border-2 border-yellow-400'}  bg-white bg-opacity-75 rounded-full p-[0.125rem]`}
				size={20}
			/>

			{
				hovered && (
					<div className='bg-slate-50 w-64 p-2 rounded-xl z-50'>
						<p>{props.name}</p>
						<p>{props.description}</p>
					</div>
				)
			}
		</Html>
	)
}

export default InfoMarkers