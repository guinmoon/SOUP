var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["loadFile"] = requestHandlers.loadFile;
handle["/peopleSearch"] = requestHandlers.searchPeople;
handle["/stillWaitingForSearch"] = requestHandlers.stillWaitingForSearch;
handle["/getCountries"] = requestHandlers.getCountries;
handle["/getCities"] = requestHandlers.getCities;
handle["passport"] = requestHandlers.passport;
handle["/checkAuth"] = requestHandlers.checkAuth;
handle["/logout"] = requestHandlers.logout;

server.start(router.route, handle);