import { Vector3 } from "three";

export function convertFromBlenderLocation(blenderLocation: number[]) {
	let x = blenderLocation[0];
	let y = blenderLocation[2];
	let z = -blenderLocation[1];

	return new Vector3(x, y, z);
}