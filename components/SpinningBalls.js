import { Vector3, Matrix4, Quaternion, Color } from "three";
import { useRef, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function SpinningBalls({ material }) {
	const instancedRef = useRef();

	const ballsCount = 100;
	const matrix = new Matrix4();
	let colors = new Color();

	useLayoutEffect(() => {
		for (let i = 0; i < ballsCount; i++) {
			const scale = 0.2 + Math.abs(Math.sin(i) * 7) + 2;
			matrix.compose(
				new Vector3(Math.sin(i + 4) * 50, Math.cos(i + 4) * 50, i * 2),
				new Quaternion(),
				new Vector3(scale, scale, scale),
			);
			instancedRef.current.setMatrixAt(i, matrix);
			instancedRef.current.setColorAt(
				i,
				colors.setHex(Math.random() * 20 * 0xffffff),
			);

			instancedRef.current.instanceColor.needsUpdate = true;
			instancedRef.current.instanceMatrix.needsUpdate = true;
		}

		instancedRef.current.material.toneMapped = false;
		instancedRef.current.material.emissiveIntensity = 1.2;
		instancedRef.current.material.emissive = colors.setRGB(0, 2, 0);

		instancedRef.current.material.color.r = 5;
		instancedRef.current.material.color.g = 2.5;
		instancedRef.current.material.color.b = 10;
	}, []);

	useFrame((state) => {
		instancedRef.current.rotation.z =
			Math.sin(state.clock.elapsedTime * 0.1) * 20;
		instancedRef.current.position.y =
			Math.cos(10 - state.clock.elapsedTime * 0.25) * 5;
	});

	return (
		<instancedMesh
			scale={0.4}
			position={[0, null, -7]}
			rotation={[-Math.PI / 2, 0, 0]}
			ref={instancedRef}
			args={[null, null, ballsCount]}
			material={material}
		>
			<sphereGeometry args={[0.5, 16]} />
		</instancedMesh>
	);
}
