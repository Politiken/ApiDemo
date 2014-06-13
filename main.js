var apistatus = require("./apistatus.js");
var eventV2Api = require("./eventV2Api.js");
var placeV2Api = require("./placeV2Api.js");
var scheduleV2Api = require("./scheduleV2Api.js");

apistatus.canLogin();

placeV2Api.import({
	Id: "1",
	pnumber: "",
	cvrnumber: "",
	name: "testCinema",
	description: "new place",
	streetname: "test",
	housenumber: "13",
	city: "Frederiksberg",
	PostalCode: "2000",
	category: "Cinema",
});


eventV2Api.import({
	Id: "2",
	Category: "Movie",
	Name: "testMovie",
	Description: "test",
});

scheduleV2Api.import({
	PlaceId: "1",
	EventId: "2",
	StartDateTime: new Date().toISOString(),
});