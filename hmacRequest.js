exports.makeRequest = function (url, object) {
		var crypto = require('crypto');
		var root = "http://politiken.dk"

		var userName = "test";
		var secret = "test";

		//Used in the header and HMAC
		var timeStampString = new Date().toISOString().replace(/\..../, '');

		//create HMAC from request url and timestamp
		var cryptoHmac = crypto.createHmac('SHA256', secret).update(root + url+ ";" + timeStampString).digest('hex');

		var headers = {
			'Timestamp': timeStampString,
			'Authorization': 'PolitikenAPI;' + userName + ';' + cryptoHmac
		};

		var requestParameters = {
		  url: root + url,
		  headers: headers
		}

		if (object != null){
			requestParameters["form"] = object;
		}

		var request = require("request");
		request.post(requestParameters, function(error, response, body) {
		  	if (error != null){
		  		throw error;
		  	}
		  	
		  	console.log(body);
		});
}
