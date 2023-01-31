import { sRGBEncoding } from "three";
import { useEffect, useRef, useState } from "react";
import { Html } from "@react-three/drei";
export default function Switch() {
	const ref = useRef();
	const spaceNoise = new Audio("./mixkit-water-sci-fi-bleep-902.wav");

	const [swich, setSwitch] = useState();
	let [count, setCount] = useState(0);
	const updateMaterial = (
		color,
		toneMapped,
		emissiveIntensity,
		emissiveColor,
	) => {
		ref.current.material.color.r = ref.current.material.color.b = color;
		ref.current.material.toneMapped = toneMapped;
		ref.current.material.emissiveIntensity = emissiveIntensity;
		ref.current.material.emissive.r = emissiveColor;
		spaceNoise.play();
	};

	if (swich) {
		updateMaterial(1, true, 1, 1);
	} else if (swich === false) {
		updateMaterial(10, false, 10, 10);
	}

	if (count > 10) {
		count = 0;
	}

	useEffect(() => {
		updateMaterial(10, false, 10, 10);
		ref.current.material.encoding = sRGBEncoding;
		ref.current.material.needsUpdate = true;
	}, []);
	return (
		<mesh
			onClick={() => {
				setCount(count + 1);
				setSwitch(!swich);
			}}
			ref={ref}
		>
			<boxGeometry />
			<meshPhongMaterial color="blue" />
			<Html>{count}</Html>
		</mesh>
	);
}
