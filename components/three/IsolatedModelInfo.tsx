import { CameraControls, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { Suspense, useEffect, useRef } from "react";
import { Mesh, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Scene(props: any) {
	const modelRef = useRef<Mesh>(null);
	const photoBooth = useLoader(GLTFLoader, `${props.boothData.modelLocation}`);

	useFrame(() => {
		if (!modelRef.current) return;

		modelRef.current.rotation.y -= 0.01;
	})
	return (
		<>
			<pointLight intensity={3.25} position={[3, 10, 3]} />
			<ambientLight intensity={0.25} />

			<Suspense fallback={null}>
				<group position={[0, -5, 0]}>
					<primitive ref={modelRef} object={photoBooth.scene} />
				</group>

			</Suspense >
		</>
	)
}

export function IsolatedModelInfoCard(props: any) {
	const canvasRef = useRef();
	const cameraControlRef = useRef();

	// const controls = useControls(
	// 	'Isolated Camera', {
	// 	cameraPosition: { value: [props.boothData.camera.position[0], props.boothData.camera.position[1], props.boothData.camera.position[2]], step: 0.1 },
	// })

	return (
		<Canvas
			className=' rounded-2xl'
			style={{ backgroundImage: "url('/three/seamlessCameraPattern.png')" }}
			ref={canvasRef}
			onMouseDown={(e) => e.preventDefault()}

		>
			<PerspectiveCamera
				position={[props.boothData.camera.position[0], props.boothData.camera.position[1], props.boothData.camera.position[2]]}
			>
				<Scene boothData={props.boothData} />
			</PerspectiveCamera>
		</Canvas>
	)
}