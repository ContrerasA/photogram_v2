'use client';
import { OrbitControls, Html, GizmoHelper, GizmoViewport, TransformControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import THREE, { MeshStandardMaterial, TextureLoader, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls } from 'leva'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import InfoMarkers from './InfoMarkers';
import threeBoothData from "@/src/data/three/threeBoothData.json"
import { convertFromBlenderLocation } from "@/src/utils/threeUtils";
import { scriptFont } from '@/src/utils/fontUtils';
import { LiaHandPointerSolid } from 'react-icons/lia'

interface ThreeBoothProps {
	booth: string
}

function applyTexture(object, texture) {
	object.scene.traverse((node) => {
		if (node.type == 'Mesh') {
			const material = new MeshStandardMaterial({ map: texture });
			node.material = material;
		}
	})
	texture.flipY = false;
}

function Scene(props: ThreeBoothProps) {
	let [active, setActive] = useState(false);
	let boothData = threeBoothData.filter(el => el.booth == props.booth);
	console.log(boothData)



	const room = useLoader(GLTFLoader, '/three/booth06.glb');
	const roomTexture = useLoader(TextureLoader, '/three/baked05.jpg');
	applyTexture(room, roomTexture);

	return (
		<>
			<OrbitControls rotateSpeed={0.25} makeDefault />
			<ambientLight intensity={1.25} />
			<Suspense fallback={null}>
				<group>
					<primitive object={room.scene} />
				</group>
				<group>
					{boothData && boothData.map((el, index) => (
						<InfoMarkers key={index} name={el.name} description={el.description} position={convertFromBlenderLocation(el.position)} />
					))}
				</group>

			</Suspense >
		</>
	)
}



const ThreeBooth = (props: ThreeBoothProps) => {
	const [interacted, setInteracted] = useState<boolean>(false);

	function handleInteraction(e) {
		e.preventDefault();
		if (interacted != true) {
			setInteracted(true);
		}
	}

	return (
		<section className='flex h-[600px] p-5  rounded-2xl' >
			<div className=' w-1/2  mx-5 shadow-lg shadow-slate-700 rounded-xl  bg-slate-200 relative'>
				<Canvas flat linear orthographic camera={{ zoom: 30, position: [32, 11, -20.65] }} onMouseDown={handleInteraction}>
					<Scene booth={props.booth} />
				</Canvas>
				{!interacted && (
					<div className='absolute z-[100] top-0 w-full mt-10 bg-slate-50 bg-opacity-75 text-center flex items-center justify-center p-5 '>
						<LiaHandPointerSolid size={24} className='mx-5' />
						<p className="text-xl">Click and Drag to interact with this model</p>
					</div>
				)}
			</div>
			<div className='w-1/2 h-full mx-5 bg-'>
				<p className={`${scriptFont.className} text-5xl text-center`}>Interactive Booth Display</p>
				<p className='text-center text-sm'>Step into the immersive world of our interactive canvas experience, where your event comes to life! Explore a glimpse of what awaits you with our photobooth rental. The captivating visuals showcased here offer just a taste of the excitement and creativity that awaits you and your guests. Get ready to capture unforgettable moments and create memories that will be cherished forever</p>
			</div>

		</section>
	)
}

export default ThreeBooth