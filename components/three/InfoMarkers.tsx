'use client';
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Vector3 } from 'three'

interface InfoMarkersProps {
	name: string
	description: string
	position: Vector3
}

const InfoMarkers = (props: InfoMarkersProps) => {
	const [active, setActive] = useState<boolean>(false);
	const htmlRef = useRef();
	let parentEl: any = null;

	function refresh() {
		if (htmlRef && htmlRef.current) {
			if (parentEl == null) {
				// @ts-ignore
				parentEl = htmlRef.current.parentNode;
			}

			if (!active) {
				parentEl.style.zIndex = "0";
			}
		}
	}

	useFrame(() => {
		refresh();
	})




	return (
		// @ts-ignore
		<Html ref={htmlRef} position={props.position}  className='select-none cursor-pointer'  >

				<AiOutlineInfoCircle
					onMouseOver={() => setActive(true)}
				onMouseOut={() => setActive(false)}
				className='bg-white bg-opacity-75 rounded-full p-[0.125rem]'
					size={20}
				/>

			{
				active && (
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