'use client';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { MeshStandardMaterial, TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { folder, useControls } from 'leva'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { InfoMarker } from './InfoMarkers';
import threeBoothData from "@/src/data/three/threeBoothData.json"
import { convertFromBlenderLocation } from "@/src/utils/threeUtils";
import { scriptFont } from '@/src/utils/fontUtils';
import { LiaHandPointerSolid } from 'react-icons/lia'
import { format } from 'date-fns';
import InfoMarkers from './InfoMarkers';
import THREE from 'three'

import { IsolatedModelInfoCard } from './IsolatedModelInfo';

interface ThreeBoothProps {
	booth: string
	setActiveInfoMarker: any
}

function applyTexture(object: THREE.Object3D, texture: THREE.Texture) {
	// @ts-ignore
	object.scene.traverse((node: THREE.Mesh) => {
		if (node.type == 'Mesh') {
			const material = new MeshStandardMaterial({ map: texture });
			node.material = material;
		}
	})
	texture.flipY = false;
}


function MainScene(props: ThreeBoothProps) {
	const [flashVisible, setFlashVisible] = useState(false);
	const cameraRef = useRef();

	let boothData = threeBoothData.filter(el => el.booth == props.booth);

	const room = useLoader(GLTFLoader, '/three/booth07.glb');
	const roomTexture = useLoader(TextureLoader, '/three/bake07.jpg');
	// @ts-ignore
	applyTexture(room, roomTexture);

	const photoProps = useLoader(GLTFLoader, '/three/props01.glb');
	const photoPropsTexture = useLoader(TextureLoader, '/three/t_props01.jpg');
	// @ts-ignore
	applyTexture(photoProps, photoPropsTexture);


	const cameraFlash = useLoader(GLTFLoader, '/three/cameraFlash.glb');
	const gradientTexture = useLoader(TextureLoader, '/three/circularGradient.jpg');


	const material = new MeshStandardMaterial({
		color: 0xffffff,
		opacity: 1.5,
		transparent: true,
		depthWrite: false, // Disable depth writing to ensure the cone always appears in front
		alphaTest: 0, // Adjust the alphaTest value to control the transparency threshold
	});
	material.alphaMap = gradientTexture;

	cameraFlash.scene.traverse((node) => {
		if (node.type == 'Mesh') {
			const mesh = node as THREE.Mesh;
			mesh.material = material;
		}
	})

	function toggleFlashlight() {
		const maxDelay = 4000;
		const minDelay = 1000;
		let delay = Math.random() * (maxDelay - minDelay) + minDelay;
		setFlashVisible(true);
		setTimeout(() => {
			setFlashVisible(false);
		}, 100);
		setTimeout(() => {
			toggleFlashlight()
		}, delay)
	}

	const controls = useControls(
		{
			orbitCamera: folder({
				orbitTarget: [-0.9, 4.8, -1.7],
				cameraPosition: { value: [14.3, 19.2, -19.3], step: 0.1 },
				cameraRotation: { value: [-3.6, -3.6, -3], step: 0.1 },
				cameraZoom: { value: 21, min: 0.1, max: 45, step: 1 }, // Add a control for zoom
			})
		}

	);
	console.log('test')

	useEffect(() => {
		toggleFlashlight()
		props.setActiveInfoMarker(boothData[0]);
	}, [])

	return (
		<>
			<OrbitControls rotateSpeed={0.25} makeDefault target={controls.orbitTarget} />
			<OrthographicCamera
				ref={cameraRef}
				makeDefault
				position={controls.cameraPosition}
				rotation={controls.cameraRotation}
				zoom={controls.cameraZoom}
			/>
			<ambientLight intensity={1.25} />
			<Suspense fallback={null}>

				<group>
					<primitive object={room.scene} />
					<primitive object={photoProps.scene} />

					{
						flashVisible && (
							<primitive object={cameraFlash.scene} />
						)
					}
				</group>
				<group>
					{boothData && boothData.map((el, index) => (
						<InfoMarkers
							key={index}
							name={el.name}
							description={el.description}
							position={convertFromBlenderLocation(el.infoMarkerPosition)}
							setActiveInfoMarker={props.setActiveInfoMarker}
							boothData={el}
						/>
					))}
				</group>

			</Suspense >
		</>
	)
}



const ThreeBooth = (props: ThreeBoothProps) => {
	const [interacted, setInteracted] = useState<boolean>(false);
	const [activeInfoMarker, setActiveInfoMarker] = useState<InfoMarker>()
	let boothData = threeBoothData.filter(el => el.booth == props.booth);


	const controls = useControls(
		{
			mainCamera: folder({
				cameraPosition: { value: [15, 11.3, -34], step: 0.1 },
				cameraZoom: { value: 22, min: 0, max: 100, step: 1 },
				cameraRotation: { value: [-6.1, -3.6, -0.1], step: .1 },
			})
		}
	);

	function handleInteraction(e: any) {
		e.preventDefault();
		if (interacted != true) {
			setInteracted(true);
		}
	}

	useEffect(() => {
	})

	return (
		<section className='flex h-[650px]  space-x-14 '>
			<div className='w-1/2 h-full bg-white px-6 pt-6 shadow-lg shadow-slate-900 p-5 rounded-lg relative rotate-2'>
				<div className='h-5/6 bg-slate-200 relative select-none'
					onMouseDown={handleInteraction}
				>
					<Canvas
						flat
						linear
						className=''
					>

						<MainScene booth={props.booth} setActiveInfoMarker={setActiveInfoMarker} />
					</Canvas>
					{!interacted && (
						<div>
							<div className='absolute z-[100] top-0 w-full mt-10 bg-slate-50 bg-opacity-75 text-center flex items-center justify-center p-5 '>
								<LiaHandPointerSolid size={24} className='mx-5' />
								<p className="text-xl">Click and Drag to interact with this model</p>
							</div>

						</div>
					)}
					<div className='absolute bottom-0 m-5 flex items-center space-x-2'>
						<AiOutlineInfoCircle />
						<p>Click on an info marker to learn more</p>
					</div>
				</div>
				<p className={`${scriptFont.className} text-3xl text-end mt-5`}> - Photogram Photo Booth</p>
				<p className={`${scriptFont.className} text-lg text-end mt-2`}> {format(new Date(), "MMMM d, yyy")}</p>

			</div>
			<div className='w-1/2 h-full  bg-'>
				<p className={`${scriptFont.className} text-5xl text-center`}>Interactive Booth Display</p>
				<p className='text-center text-sm mt-5'>Step into the immersive photograph of our interactive Photo Booth experience, where your event comes to life! Explore a glimpse of what awaits you with our photobooth rental.</p>
				<div className='bg-white shadow-lg shadow-slate-700 rounded-xl h-96 p-8 mt-5'>
					{
						activeInfoMarker ? (
							<div className='flex h-full w-full space-x-4'>
								<div className='w-1/2 h-full flex justify-center'>


									<IsolatedModelInfoCard boothData={activeInfoMarker} />
								</div>
								<div className='w-1/2'>


									<p className={`${scriptFont.className} text-3xl`}>{activeInfoMarker.name}</p>
									<p>{activeInfoMarker.description}</p>
								</div>
							</div>
						) : (
							<div>
								<p className={`${scriptFont.className} text-3xl`}>Click on an info marker to get started</p>
							</div>
						)
					}
				</div>
			</div>

		</section>
	)
}

export default ThreeBooth