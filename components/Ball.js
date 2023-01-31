import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function Ball() {
	const ball = useRef();

	useEffect(() => {
		ball.current.material.toneMapped = false;
		ball.current.material.emissiveIntensity = 1.2;
		ball.current.material.color.r = 1.2;
		ball.current.material.color.g = 2.5;
		ball.current.material.color.b = 10;
	});

	useFrame((state) => {
		ball.current.position.x = Math.abs(
			Math.sin(state.clock.elapsedTime * 0.1) * 0.5,
		);

		ball.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 1;

		ball.current.position.y =
			2 + Math.cos(state.clock.elapsedTime * 0.5) * 1;
	});

	return (
		<mesh ref={ball} position={[0, 0, 0]}>
			<sphereGeometry args={[0.2, 32, 32]} />
			<meshPhongMaterial />
		</mesh>
	);
}
