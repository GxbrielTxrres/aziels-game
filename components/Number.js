import { Text } from "@react-three/drei";
import { DoubleSide, MeshPhongMaterial } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Number({ count, color }) {
	const text = useRef();

	const material = new MeshPhongMaterial({
		emissiveIntensity: 2,
		color: color,
		side: DoubleSide,
	});

	useFrame((state) => {
		text.current.lookAt(state.camera.position);
	});

	return (
		<Text ref={text} material={material} position={[0, -2, 0]}>
			{count}
		</Text>
	);
}
