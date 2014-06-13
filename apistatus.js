var hmacRequest = require('./hmacRequest.js');

exports.canLogin = function () {
	hmacRequest.makeRequest("/ibyen/api/Status/canlogin");
}