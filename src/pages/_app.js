import "@/styles/globals.css";

import Aziel from "components/Aziel";
import Effects from "components/Effect";
import ParticleTorus from "components/ParticleTorus";
import Switch from "components/Switch";
import Ball from "components/Ball";

import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, Sparkles } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { MeshPhongMaterial } from "three";

const material = new MeshPhongMaterial();

export default function App({ Component, pageProps }) {
	return (
		<div className="webgl">
			<Canvas>
				<Perf />
				<Effects />
				<OrbitControls
					enableDamping
					dampingFactor={0.01}
					enablePan={false}
					minDistance={3.5}
					maxDistance={10}
					target={[0, 0.5, -0.5]}
				/>
				<ambientLight />

				<Center>
					<Sparkles
						count={40}
						speed={Math.random()}
						scale={10}
						size={10}
					/>
					<Aziel position={[-1, 1.5, 0]} />
					<Ball />

					<Switch />
					<ParticleTorus material={material} />
				</Center>
			</Canvas>
			<Component {...pageProps} />
		</div>
	);
}
