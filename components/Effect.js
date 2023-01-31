import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useRef } from "react";
export default function Effects() {
	const bloom = useRef();

	useFrame((state) => {
		bloom.current.intensity = Math.abs(
			0.25 + Math.sin(state.clock.elapsedTime * 0.5),
		);
	});
	return (
		<EffectComposer multisampling={0} disableNormalPass>
			<Bloom
				ref={bloom}
				radius={0.15}
				mipmapBlur
				levels={3}
				luminanceThreshold={0}
				luminanceSmoothing={0.5}
				blendFunction={BlendFunction.SRC}
			/>
		</EffectComposer>
	);
}
