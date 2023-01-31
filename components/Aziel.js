import { Float, Text3D } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
export default function Aziel(props) {
	const text = useRef();
	const [spinAmt, setSpinAmt] = useState(false);

	useEffect(() => {
		text.current.material.toneMapped = false;
		text.current.material.emissiveIntensity = 1.2;
		text.current.material.color.r = 1.2;
		text.current.material.color.g = 2.5;
		text.current.material.color.b = 0;
	}, []);

	const spin = () => {
		setSpinAmt(!spinAmt);
		console.log(spinAmt);
		if (spinAmt) {
			gsap.to(text.current.rotation, { y: Math.PI * 4, duration: 2 });
			gsap.to(text.current.rotation, { x: Math.PI / 4, duration: 2 });
			gsap.to(text.current.position, { z: -5, duration: 2 });
			gsap.to(text.current.position, { y: 4, duration: 2 });
			gsap.to(text.current.scale, { x: 1, duration: 2 });
			gsap.to(text.current.scale, { y: 1, duration: 2 });
			gsap.to(text.current.scale, { z: 1, duration: 2 });
		} else {
			gsap.to(text.current.rotation, { y: Math.PI * -4, duration: 2 });
			gsap.to(text.current.rotation, { x: Math.PI * 1.9, duration: 2 });
			gsap.to(text.current.position, { x: -1, duration: 2 });
			gsap.to(text.current.position, { y: -1, duration: 2 });
			gsap.to(text.current.position, { z: 2, duration: 2 });
			gsap.to(text.current.scale, { x: 0.85, duration: 2 });
			gsap.to(text.current.scale, { y: 0.85, duration: 2 });
			gsap.to(text.current.scale, { z: 0.85, duration: 2 });
		}
	};

	return (
		<>
			<Float>
				<Text3D
					onClick={() => {
						spin();
					}}
					ref={text}
					{...props}
					rotation-y={Math.PI / 5}
					rotation-z={Math.PI / 6}
					font="./fonts/helvetiker_regular.typeface.json"
					size={0.75}
					height={0.2}
					curveSegments={12}
					bevelEnabled
					bevelThickness={0.02}
					bevelSize={0.04}
					bevelOffset={0}
					bevelSegments={2}
					letterSpacing={0.25}
				>
					Aziel
				</Text3D>
			</Float>
		</>
	);
}
