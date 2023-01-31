import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { TorusGeometry } from "three";

const torus = new TorusGeometry();
export default function ParticleTorus() {
	const points = useRef();

	useFrame((state) => {
		points.current.rotation.x =
			Math.sin(state.clock.elapsedTime * 0.25) * 4;

		points.current.rotation.y =
			Math.cos(state.clock.elapsedTime * 0.25) * 4;

		points.current.rotation.z = state.clock.elapsedTime * 0.1;
	});

	return (
		<points ref={points} geometry={torus}>
			<pointsMaterial size={0.01} />
		</points>
	);
}
