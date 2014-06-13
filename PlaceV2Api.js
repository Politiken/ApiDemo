var hmacRequest = require('./hmacRequest.js');

exports.import = function function_name (placeObject) {
	hmacRequest.makeRequest("/ibyen/Api/v2/Place/Import?id=" + placeObject.Id, placeObject);
}