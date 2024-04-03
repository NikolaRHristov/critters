/**
 * @module Utility
 *
 */
export default interface Interface {
	(Message: Message): void;
}

import type Message from "../Type/Message.js";
