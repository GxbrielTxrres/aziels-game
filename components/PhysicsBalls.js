import { useFrame } from "@react-three/fiber";
import { InstancedRigidBodies } from "@react-three/rapier";
import { useLayoutEffect, useMemo, useRef } from "react";
import { Color } from "three";
export default function PhysicsBalls() {
	const instancedRef = useRef();
	const mesh = useRef();

	const count = 5;
	const colors = new Color(10, 0, 10);

	const ballTransforms = useMemo(() => {
		const positions = [];
		const scales = [];

		return { positions, scales };
	}, []);

	for (let i = 0; i < count; i++) {
		ballTransforms.positions.push([
			(Math.random() - 0.5) * 20,
			2 + Math.random() * 2,
			Math.random() - 0.5 * 10,
		]);

		const scale = 0.2 + Math.random() * 0.8;
		ballTransforms.scales.push([scale, scale, scale]);
	}

	useLayoutEffect(() => {
		for (let i = 0; i < count; i++) {
			mesh.current.setColorAt(
				i,
				colors.setHex(Math.random() * 20 * 0xffffff),
			);

			mesh.current.instanceColor.needsUpdate = true;
		}

		mesh.current.material.toneMapped = false;
		mesh.current.material.emissiveIntensity = 1.2;
		mesh.current.material.emissive = colors.setRGmesh;
		mesh.current.material.color.r = 5;
		mesh.current.material.color.g = 10;
		mesh.current.material.color.b = 10;
	}, []);

	useFrame(() => {
		for (let i = 0; i < count; i++) {
			if (instancedRef.current.at(i).translation().y < -5) {
				console.log(instancedRef.current.at(i));
				instancedRef.current.at(i).setTranslation({ x: 0, y: 0, z: 0 });
				instancedRef.current.at(i).setLinvel({
					x: 2 + Math.random() * Math.sin(2),
					y: 0,
					z: 0,
				});
				instancedRef.current
					.at(i)
					.setAngvel({ x: 2 + Math.random() * 2, y: 0, z: 0 });
			}
		}

		// for (let i = 0; i < count; i++) {
		// 	instancedRef.current.at(i);
		// }
	});

	return (
		<InstancedRigidBodies
			restitution={2}
			colliders="hull"
			ref={instancedRef}
			scales={ballTransforms.scales}
			positions={ballTransforms.positions}
		>
			<instancedMesh ref={mesh} castShadow args={[null, null, count]}>
				<torusGeometry />
				<meshPhongMaterial />
			</instancedMesh>
		</InstancedRigidBodies>
	);
}
