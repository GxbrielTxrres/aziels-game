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
import { Debug, Physics } from "@react-three/rapier";
import SpinningBalls from "components/SpinningBalls";
import PhysicsBalls from "components/PhysicsBalls";

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

				<Physics
					timeStep="vary"
					colliders="hull"
					gravity={[0, -9.82, 0]}
				>
					<Plane material={material} />
					<PhysicsBalls material={material} />
					{/* <Debug /> */}
				</Physics>

				<Center position={[0, -2, 0]}>
					<Stars
						radius={60}
						fade
						speed={0.75}
						factor={7.5}
						count={6000}
					/>
					<SpinningBalls material={material} />
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
