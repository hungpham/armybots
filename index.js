require('dotenv').config();

const bot = require('./twit_bot');
const screen_name = process.env.SCREEN_NAME;
const screen_name2 = process.env.SCREEN_NAME2;
const screen_name3 = process.env.SCREEN_NAME3;
const screen_name4 = process.env.SCREEN_NAME4;


//GET LIST OF FOLLOWERS
//can do friends/list or friends/id
bot.get('followers/list', { screen_name }, (err, data, response) => {
	let users = [];
	data.users.map(user => {
		users.push(user.name);
		return user;
	});
	console.log(`FOLLOWERS LIST (${users.length}): \n ${users.join(', ')}`);
});

//GET LIST OF USERS BOT IS FOLLOWING
//can do friends/list or friends/id
bot.get('friends/list', { screen_name }, (err, data, response) => {
	let users = [];
	data.users.map(user => {
		users.push(user.name);
		return user;
	});
	console.log(`FRIENDS LIST (${users.length}):\n ${users.join(', ')}`);
});

//FOLLOW SOMEONE
bot.post('friendships/create', { screen_name }, (err, data, response) => {
	console.log(data);
});


//LOOKUP FRIENDSHIPS
bot.get('friendships/lookup', { screen_name: screen_name2 }, (err, data, response) => {
	console.log(data)
});


//DIRECT MESSAGE
bot.post('direct_messages/new', {
	screen_name: screen_name3,
	text: `hi ${screen_name3}! messaged from Twit bots :p`
},
	(err, data, response) => {
		console.log(data);
	});
