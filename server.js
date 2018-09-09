// setting up required npms
let express = require("express");
let bodyParser = require("body-parser");

// creating port and application that uses express
let app = express();
let PORT = process.env.PORT || 8080;

// setting up data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// sets up route for local css and image files to run on html
app.use(express.static('app/public'));

// setting up routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// starts the server telling it which port to listen on
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});