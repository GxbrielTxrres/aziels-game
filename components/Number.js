import { Text } from "@react-three/drei";
import { DoubleSide, MeshPhongMaterial } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Number({ count, color }) {
	const text = useRef();

	const material = new MeshPhongMaterial({
		emissiveIntensity: 20,
		toneMapped: false,
		color: color,
		side: DoubleSide,
	});

	useFrame((state) => {
		text.current.lookAt(state.camera.position);
	});

	return (
		<Text
			fontSize={1.5}
			outlineColor={[1, 0, 0]}
			outlineWidth={0.04}
			ref={text}
			material={material}
			position={[0, -2, 0]}
		>
			{count}
		</Text>
	);
}
