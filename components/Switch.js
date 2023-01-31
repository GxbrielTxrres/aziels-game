import { sRGBEncoding } from "three";
import { useEffect, useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
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

	const changeScale = (x, y, z) => {
		ref.current.scale.set(x, y, z);
	};

	if (swich) {
		updateMaterial(1, true, 1, 1);
		changeScale(0.75, 0.75, 0.75);
	} else if (swich === false) {
		updateMaterial(10, false, 10, 10);
		changeScale(1, 1, 1);
	}

	if (count > 10) {
		count = 0;
	}

	useEffect(() => {
		updateMaterial(10, false, 10, 10);
		ref.current.material.encoding = sRGBEncoding;
		ref.current.material.needsUpdate = true;
	}, []);

	useFrame((state) => {
		ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 4;
		ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.25) * 4;
	});

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
			<Html
				style={{
					color: "white",
					fontSize: "3rem",
					pointerEvents: "none",
				}}
				transform
				occlude={null}
			>
				{count}
			</Html>
		</mesh>
	);
}
