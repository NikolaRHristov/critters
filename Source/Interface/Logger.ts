/**
 * @module Utility
 *
 */
export default interface Interface {
	Trace?: Message;

	Debug?: Message;

	Info?: Message;

	Warn?: Message;

	Error?: Message;

	Silent?: Message;
}

import type Message from "../Interface/Message.js";
