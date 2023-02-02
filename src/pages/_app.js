import "@/styles/globals.css";

import Aziel from "components/Aziel";
import Effects from "components/Effect";
import ParticleTorus from "components/ParticleTorus";
import Switch from "components/Switch";
import Ball from "components/Ball";
import Plane from "components/Plane";

import { Canvas } from "@react-three/fiber";
import {
	CameraControls,
	Center,
	OrbitControls,
	Stars,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { MeshPhongMaterial } from "three";

const material = new MeshPhongMaterial();

export default function App({ Component, pageProps }) {
	return (
		<div className="webgl">
			<Canvas camera={{ position: [-2, 2, 12], far: 200, fov: 60 }}>
				<Perf />
				<Effects />

				<OrbitControls
					minDistance={5}
					maxDistance={15}
					enablePan={false}
					enableDamping
					dampingFactor={0.03}
					target={[0, -2, 1]}
				/>

				<Plane material={material} />

				<Center position={[0, -2, 0]}>
					<Stars
						radius={60}
						fade
						speed={0.75}
						factor={7.5}
						count={6000}
					/>
					<Aziel position={[-4, 1.5, 4]} />
					<Ball />

					<Switch />
					<ParticleTorus />
				</Center>
			</Canvas>
			<Component {...pageProps} />
		</div>
	);
}
