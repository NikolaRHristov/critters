import type Interface from "../Interface/Logger.js";

/**
 * @module Utility
 *
 */
export default {
	Trace: (Message) => {
		console.trace(Message);
	},

	Debug: (Message) => {
		console.debug(Message);
	},

	Warn: (Message) => {
		console.warn(chalk.yellow(Message));
	},

	Error: (Message) => {
		console.error(chalk.bold.red(Message));
	},

	Info: (Message) => {
		console.info(chalk.bold.blue(Message));
	},

	Silent: () => ({}),
} satisfies Interface as Interface;

export const { default: chalk } = await import("chalk");
