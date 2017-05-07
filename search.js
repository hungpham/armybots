const bot = require('./twit_bot');

// checkout more query and parameters at https://dev.twitter.com/rest/public/search
bot.get('search/tweets', { q: '#reactjs', count: 10 }, (err, data, response) => {
	if (err) {
		console.log(err);
	} else {
		data.statuses.forEach(function (s) {
			console.log(`Text: ${s.text} \nBy: ${s.user.screen_name}\n`);
		});
	}
});