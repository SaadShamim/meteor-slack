Template.messages.helpers({
	messages: Messages.find({})
});

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
})

Template.registerHelper("timestampToTime", function (timestamp) {
	var date = new Date(timestamp);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();
	return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
})

Template.registerHelper("usernameFromId", function (userId) {
	console.log(userId)
	var user = Meteor.users.findOne({_id: userId});
	console.log(user)

	if (typeof user === "undefined") {
		return "Anonymous";
	}

	return user.username;
})

Template.listings.helpers({
	channels: function () {
		return Channels.find();
	}
})

Template.registerHelper('currentChannel', function () {
	return Session.get('channel');
});

Template.channel.helpers({
	active: function () {
		if (Session.get('channel') === this.name) {
			return "active";
		} else {
			return "";
		}
	}
})

Meteor.subscribe('messages')