var doAuth = function(){
	console.log("fine");
	var auth = "https://instagram.com/oauth/authorize/?client_id="+ ENV["INSTAGRAM_CLIENT_ID"]+ "&redirect_uri=http://localhost&response_type=token"
	window.location.href = auth;


	$("#startPage").hide();



	
}






var groups = []

var makeEmptyGroup = function(groupName){
	if (groupName == ""){

	}
	else{
		var newGroup = [];
		newGroup[0] = groupName;
	}
}