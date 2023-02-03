import "@/styles/globals.css";

import Aziel from "components/Aziel";
import Effects from "components/Effect";
import ParticleTorus from "components/ParticleTorus";
import Switch from "components/Switch";
import Ball from "components/Ball";
import Plane from "components/Plane";
import SpinningBalls from "components/SpinningBalls";
import PhysicsBalls from "components/PhysicsBalls";

import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, Stars } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { MeshPhongMaterial } from "three";
import { Physics } from "@react-three/rapier";

const material = new MeshPhongMaterial();

const orbitControlProps = {
	minDistance: 5,
	maxDistance: 15,
	enablePan: false,
	enableDamping: true,
	dampingFactor: 0.03,
	target: [0, -2, 1],
};

const physicsProps = {
	timestep: "vary",
	colliders: "hull",
	gravity: [0, -9.82, 0],
};

const starProps = {
	radius: 60,
	fade: true,
	speed: 0.75,
	factor: 7.5,
	count: 6000,
};

export default function App({ Component, pageProps }) {
	return (
		<div className="webgl">
			<Canvas camera={{ position: [-2, 2, 12], far: 200, fov: 60 }}>
				<Perf />
				<Effects />

				<OrbitControls {...orbitControlProps} />

				<Physics {...physicsProps}>
					<Plane material={material} />
					<PhysicsBalls material={material} />
				</Physics>

				<Center position={[0, -2, 0]}>
					<Stars {...starProps} />
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
