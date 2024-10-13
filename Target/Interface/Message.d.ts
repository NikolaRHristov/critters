import type Message from "../Type/Message.js";

/**
 * @module Utility
 *
 */
export default interface Interface {
	(Message: Message): void;
}
