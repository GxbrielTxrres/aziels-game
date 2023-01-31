import "@/styles/globals.css";
import { Center, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Aziel from "components/Aziel";
import Effects from "components/Effect";
import Switch from "components/Switch";
import { Perf } from "r3f-perf";
export default function App({ Component, pageProps }) {
	return (
		<div className="webgl">
			<Canvas>
				<Perf />
				<Effects />
				<OrbitControls
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
					<Switch />
				</Center>
			</Canvas>
			<Component {...pageProps} />
		</div>
	);
}
