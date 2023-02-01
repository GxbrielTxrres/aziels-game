import { Float, Text3D } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
export default function Aziel(props) {
	const text = useRef();
	const [spinAmt, setSpinAmt] = useState(false);

	const animate = (ref, divide, rotX, rotY, posX, posY, posZ, scale) => {
		gsap.to(ref.current.rotation, {
			x: divide === true ? Math.PI / rotX : Math.PI * rotX,
			duration: 2,
		});
		gsap.to(ref.current.rotation, {
			y: Math.PI * rotY,
			duration: 2,
		});

		gsap.to(ref.current.position, { x: posX, duration: 2 });
		gsap.to(ref.current.position, { y: posY, duration: 2 });
		gsap.to(text.current.position, { z: posZ, duration: 2 });

		gsap.to(ref.current.scale, { x: scale, duration: 2 });
		gsap.to(ref.current.scale, { y: scale, duration: 2 });
		gsap.to(ref.current.scale, { z: scale, duration: 2 });
	};

	useEffect(() => {
		text.current.material.toneMapped = false;
		text.current.material.emissiveIntensity = 1.2;
		text.current.material.color.r = 1.2;
		text.current.material.color.g = 2.5;
		text.current.material.color.b = 0;
	}, []);

	const spin = () => {
		setSpinAmt(!spinAmt);
		if (spinAmt) {
			animate(text, true, 4, 4, null, 4, -5, 1);
		} else {
			animate(text, false, -4, 1.9, -1.2, -2, 2, 0.85);
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
