import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import vertexShader from "@/shaders/vertexShader";
import fragmentShader from "@/shaders/fragmentShader";
import { useRef } from "react";
import { Color } from "three";
import { RigidBody } from "@react-three/rapier";

const PlaneShader = shaderMaterial(
	{ uTime: 0, uColor: new Color("0xffffff") },
	vertexShader,
	fragmentShader,
);

extend({ PlaneShader });

export default function Plane({ material }) {
	const plane = useRef();

	useFrame((state) => {
		plane.current.material.uniforms.uTime.value = state.clock.elapsedTime;
	});

	return (
		<RigidBody type="fixed">
			<mesh ref={plane} rotation-x={-Math.PI / 2} position-y={-5}>
				<planeGeometry args={[20, 20]} />
				<planeShader uColor="#f800ff" />
			</mesh>
		</RigidBody>
	);
}
