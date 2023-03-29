import { Job } from "node-schedule";

const Jobs: Map<String, Job> = new Map();

export function createdJob(name: String, job: Job): void {
	if (hasJob(name)) {
		log(name, "has a Job");
	}
	Jobs.set(name, job);
}

export function getJob(name: String): Job | undefined {
	if (!hasJob(name)) {
		log(name, "has no Job");
	}
	return Jobs.get(name);
}

export function stopJob(name: String): void {
	if (!hasJob(name)) {
		log(name, "has no Job");
		return;
	}
	Jobs.get(name)!.cancel();
	Jobs.delete(name);
	log(name, "has was stopt");
}

export function hasJob(name: String): boolean {
	return Jobs.get(name) != undefined;
}

function log(name: String, ...args: unknown[]) {
	console.log(`[job] ID: ${name}`, ...args);
}
