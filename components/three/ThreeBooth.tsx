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
	let boothData = threeBoothData.filter(el => el.booth = props.booth);



	const room = useLoader(GLTFLoader, '/three/booth05.glb');
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

	return (
		<div >
			<div className='h-[600px] w-[600px] shadow-lg shadow-slate-700 rounded-[2.5rem] overflow-hidden bg-slate-200'>
				<Canvas flat linear orthographic camera={{ zoom: 30, position: [32, 11, -20.65] }}>
					<Scene booth={props.booth} />
				</Canvas>
			</div>
		</div>
	)
}

export default ThreeBooth