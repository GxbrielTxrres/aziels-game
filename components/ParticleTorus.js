import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color, TorusGeometry } from "three";

const torus = new TorusGeometry();
export default function ParticleTorus() {
	const points = useRef();
	const color = new Color(20, 20, 20);

	useFrame((state) => {
		points.current.rotation.x =
			Math.sin(state.clock.elapsedTime * 0.25) * 4;

		points.current.rotation.y =
			Math.cos(state.clock.elapsedTime * 0.25) * 4;

		points.current.rotation.z = state.clock.elapsedTime * 0.1;
	});

	return (
		<points scale={1.5} ref={points} geometry={torus}>
			<pointsMaterial toneMapped={false} color={color} size={0.03} />
		</points>
	);
}
