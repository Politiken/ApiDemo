var hmacRequest = require('./hmacRequest.js');

exports.import = function function_name (eventObject) {
	hmacRequest.makeRequest("/ibyen/Api/v2/Event/Import?id=" + eventObject.Id, eventObject);
}