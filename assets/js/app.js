
$(function(){

	var streamers = ["bonjwa", "kerrag", "moondye7", "freecodecamp", "esl_sc2"];

// streamers.forEach(function(s) {
// 	$('#content').append("<p>" + s + "</p>");
// });

	$.each(streamers, function(k, streamer) {
		getUserDetails(streamer);
		getStreamerDetails(streamer);
		$(".content").append(writeContent(streamer));
		//console.log(streamer);
	});
});

function writeContent(streamer) {
	//console.log(streamerDetails);
	//console.log(userDetails);
	var content = ""
	
	content  = "<div class='panel panel-default'>" +
					"<a href='https://www.twitch.tv/" + streamer + "' target='_blank'>" + 
						"<div class='panel-body' id='"+ streamer + "'>" +
							"<div class='headline'></div>" +
		 					"<div class='channelStatus'></div>" +
						"</div>" +
					"</a>" +
		 		"</div>";

	return content;
}

function getStreamerDetails(streamer) {

		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamer)
		.done(function(data) {
			if(data.stream === null) {

			} else {
				$("#" + streamer).addClass("live");
				$("#" + streamer + " .channelStatus")
				.append("<p>" + data.stream.channel.status + "</p>");	
			}
			
		});
	
}

function getUserDetails(user) {

	console.log("user: ", user);

		$.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + user)
		.done(function(data) {
			$("#" + user + " .headline")
			.append("<h2>" + data.display_name + "</h2>");

			$("#" + user + " .headline")
			.append("<img src='"+ data.logo  +"' alt='" + data.name +"_logo' class='img-circle pull-right'>")
		})
	
}

