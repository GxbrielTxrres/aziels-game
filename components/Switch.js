import { Color, sRGBEncoding } from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import Number from "./Number";
import gsap from "gsap";
export default function Switch() {
	const ref = useRef();
	const [spaceNoise] = useState(
		() => new Audio("mixkit-water-sci-fi-bleep-902.wav"),
	);
	const [numberAudio] = useState(() => new Audio("./sounds/1.mp3"));

	let links = [
		"./sounds/1.mp3",
		"./sounds/2.mp3",
		"./sounds/3.mp3",
		"./sounds/4.mp3",
		"./sounds/5.mp3",
	];

	const [swich, setSwitch] = useState();
	let [count, setCount] = useState(1);
	let [color, setColor] = useState(new Color(10, 0, 0));

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
		numberAudio.src = count === 6 ? links[count - 6] : links[count - 1];
		numberAudio.play();
	};

	const changeScale = (x, y, z) => {
		gsap.to(ref.current.scale, { x: x, duration: 1, ease: "easeOut" });
		gsap.to(ref.current.scale, { y: y, duration: 1, ease: "easeOut" });
		gsap.to(ref.current.scale, { z: z, duration: 1, ease: "easeOut" });
	};

	if (swich) {
		updateMaterial(1, true, 1, 1);
		changeScale(0.75, 0.75, 0.75);
	} else if (swich === false) {
		updateMaterial(10, false, 10, 10);
		changeScale(1, 1, 1);
	}

	if (count > 5) {
		count = 1;
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
				setColor(
					new Color(
						Math.random() * 10,
						Math.random() * 10,
						Math.random() * 10,
					),
				);
			}}
			ref={ref}
		>
			<ambientLight />
			<boxGeometry />
			<meshPhongMaterial color="blue" />
			<Number color={color} count={count} />
		</mesh>
	);
}
