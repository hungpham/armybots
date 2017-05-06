require('dotenv').config();

const bot = require('./twit_bot');
const screen_name = process.env.SCREEN_NAME;
const stringID = '860719251430162432';

//GET HOME TIMELINE
const getBotTimeline = () => {
	bot.get('statuses/home_timeline', { count: 5 }, (err, data, response) => {
		if (err) {
			console.log(err);
		} else {
			data.forEach(d => console.log(`Text: ${d.text} \n String ID: ${d.id_str} \n\n`));
		}
	});
}
// getBotTimeline();


//RETWEET
const retweet = (idString) => {
	bot.post('statuses/retweet/:id', { id: idString }, (err, data, response) => {
		if (err) {
			console.log(`Error: ${err}`);
		} else {
			console.log(`Retweet count: ${data.retweet_count}`);
		}
	});
}

//UNRETWEET
const unretweet = (idString) => {
	bot.post('statuses/unretweet/:id', { id: idString }, (err, data, response) => {
		if (err) {
			console.log(`Error: ${err}`);
		} else {
			console.log(`Retweet count: ${data.retweet_count}`);
		}
	});
}

// unretweet(stringID);
// retweet(stringID);

//REPLY TO TWEET
const replyToTweet = (screenName, idString, replyString) => {
	const reply = '@' + screenName + ' ' + replyString;
	bot.post('statuses/update',
		{
			status: reply,
			in_reply_to_status_id: idString
		}, (err, data, response) => {
			if (err) {
				console.log(`Error: ${err}`);
			} else {
				console.log(reply + " has been replied.");
			}
		});
}

// replyToTweet(screen_name, stringID, 'yay! replied to Tweet');

//DELETE TWEET
const deleteTweet = (idString) => {
    bot.post('statuses/destroy/:id', { id: idString }, (err, data, response) => {
      if (err){
        console.log(`Error: ${err}`);
      } else {
        console.log(data.text + " has been deleted.");
      }
    });
}

// deleteTweet('860712668226764801'); //removed already


//LIKE TWEET
const likeTweet = (idString) => {
  bot.post('favorites/create', { id: idString }, (err, data, response) => {
    if (err){
      console.log(`Error: ${err}`);
    } else {
      console.log(data.text + " has been liked.");
    }
  });
}


//UNLIKE TWEET
const unlikeTweet = (idString) => {
  bot.post('favorites/destroy', { id: idString }, (err, data, response) => {
    if (err){
      console.log(`Error: ${err}`);
    } else {
      console.log(data.text + " has been unliked.");
    }
  });
}

// unlikeTweet(stringID);
likeTweet(stringID);