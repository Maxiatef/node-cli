#!/usr/bin/env node

/**
 * 
 * gets a joke from chuckNorris api
 *
 * @author Max <none>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const axios = require('axios');
const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;


(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	if (input.includes(`joke`)) {
		const response = await axios.get(`http://api.chucknorris.io/jokes/random`);
		console.log("🚀 ~ response:", response.data.value)
	}
	}) ();
