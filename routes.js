const path = require("path");

var PoseidonController      = require("./Controls/Poseidon.js");
var OpenSourceController    = require("./Controls/OpenSource.js");
var TeamDirectoryController = require("./Controls/TeamDirectory.js");
var SponsorsController      = require("./Controls/Sponsors.js");
var ContactUsController     = require("./Controls/ContactUs.js");

module.exports = function(app) {
    app.get('/', function(request, response) {
        response.render('index', {
            // page params
        });
    });

    PoseidonController(app);
    OpenSourceController(app);
    TeamDirectoryController(app);
    SponsorsController(app);
    ContactUsController(app);

    app.get('/422', function(request, response) {
        response.sendFile(path.join(__dirname+"/Static/422.html"));
    });
    app.get('/500', function(request, response) {
        response.sendFile(path.join(__dirname+"/Static/500.html"));
    });
    app.get('*', function(request, response) {
        response.sendFile(path.join(__dirname+"/Static/404.html"));
    });
}
