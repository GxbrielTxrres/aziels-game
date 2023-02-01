import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export default function Ball() {
	const ball = useRef();
	const [color, setColor] = useState("");
	const [scale, setScale] = useState();

	const animateScaleOf = (x, y, z) => {
		gsap.to(ball.current.scale, { x: x, duration: 1 });
		gsap.to(ball.current.scale, { y: y, duration: 1 });
		gsap.to(ball.current.scale, { z: z, duration: 1 });
	};

	useEffect(() => {
		ball.current.material.toneMapped = false;
		ball.current.material.emissiveIntensity = 1.2;
		ball.current.material.color.r = 1.2;
		ball.current.material.color.g = 2.5;
		ball.current.material.color.b = 10;
	}, []);

	if (scale) {
		animateScaleOf(2, 2, 2);
	} else if (scale === false) {
		animateScaleOf(3, 3, 3);
	}

	useFrame((state) => {
		ball.current.position.x = Math.abs(
			Math.sin(state.clock.elapsedTime * 0.1) * 0.5,
		);

		ball.current.position.y =
			3 + Math.cos(state.clock.elapsedTime * 0.5) * 1;

		ball.current.position.z =
			-2 - Math.sin(state.clock.elapsedTime * 0.5) * 1;
	});

	return (
		<mesh
			ref={ball}
			scale={2}
			onClick={() => {
				setColor(
					ball.current.material.color.set(
						`hsl(${Math.random() * 720}, 70%, 80%)`,
					),
				);
				gsap.to(ball.current.material.color, {
					r: Math.random() * 10,
					g: Math.random() * 10,
					b: Math.random() * 10,
					duration: 1,
				});
				setScale(!scale);
			}}
			position={[0, 0, 0]}
		>
			<sphereGeometry args={[0.2, 32, 32]} />
			<meshPhongMaterial color={color} />
		</mesh>
	);
}
