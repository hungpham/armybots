const bot = require('./twit_bot');

console.log(bot);
bot.post('statuses/update', {status: 'Hello bots world 3!'}, (err, data, response) => {
	if (err) {
		console.error(`Error: ${err}`);
	} else {
		console.log(`${data.text} was posted`);
	}
});

