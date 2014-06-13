var hmacRequest = require('./hmacRequest.js');

exports.import = function function_name (scheduleObject) {
	hmacRequest.makeRequest("/ibyen/Api/v2/Schedule/Import?PlaceId=" + scheduleObject.PlaceId + "&EventId=" + scheduleObject.EventId, scheduleObject);
}