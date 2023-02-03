export const orbitControlProps = {
	minDistance: 5,
	maxDistance: 15,
	enablePan: false,
	enableDamping: true,
	dampingFactor: 0.03,
	target: [0, -2, 1],
};

export const physicsProps = {
	timestep: "vary",
	colliders: "hull",
	gravity: [0, -9.82, 0],
};

export const starProps = {
	radius: 60,
	fade: true,
	speed: 0.75,
	factor: 7.5,
	count: 6000,
};
