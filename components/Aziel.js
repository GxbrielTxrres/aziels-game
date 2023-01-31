import { Float, Text3D } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { MeshPhongMaterial } from "three";
import { useFrame } from "@react-three/fiber";

const material = new MeshPhongMaterial();
export default function Aziel(props) {
	const text = useRef();
	const ball = useRef();

	useEffect(() => {
		text.current.material.toneMapped = false;
		text.current.material.emissiveIntensity = 1.2;
		text.current.material.color.r = 1.2;
		text.current.material.color.g = 2.5;
		text.current.material.color.b = 0;
	});

	useFrame((state) => {
		ball.current.position.x =
			Math.sin(state.clock.elapsedTime * 0.25) * 1.5;

		ball.current.position.y =
			Math.cos(state.clock.elapsedTime * 0.25) * 1.5;
	});

	return (
		<>
			<mesh ref={ball} position={[0, 0, 0]} material={material}>
				<sphereGeometry args={[0.2, 32, 32]} />
			</mesh>
			<Float>
				<Text3D
					ref={text}
					{...props}
					rotation-y={Math.PI / 5}
					rotation-z={Math.PI / 6}
					font="./fonts/helvetiker_regular.typeface.json"
					size={0.75}
					height={0.2}
					curveSegments={12}
					bevelEnabled
					bevelThickness={0.02}
					bevelSize={0.04}
					bevelOffset={0}
					bevelSegments={2}
					letterSpacing={0.25}
					material={material}
				>
					Aziel
				</Text3D>
			</Float>
		</>
	);
}
