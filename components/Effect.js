import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useRef } from "react";
export default function Effects() {
	const bloom = useRef();

	return (
		<EffectComposer multisampling={0} disableNormalPass>
			<Bloom
				ref={bloom}
				radius={0.15}
				mipmapBlur
				levels={3}
				intensity={0.3}
				luminanceThreshold={0}
				luminanceSmoothing={0.2}
				blendFunction={BlendFunction.SRC}
			/>
		</EffectComposer>
	);
}
