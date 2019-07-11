const app_config = require("../config/env.config").app;

exports.config = function(app) {
    //routes go here
    app.get("/", function(req, res){
        res.sendFile("/Users/Kevin/source/repos/home-auto/src/page/html/index.html");
    });

    app.get("/lights", function(req, res) {
        res.status(200).send({
            status: 0,
        });
    });
    //send an update to the light setting
    app.post("/lights", function(req, res){
        console.log(req.body);
        res.status(200).send("Light setting updated.\n");
    });
    
    //get status of a light
    app.get("/lights/:lightID", function(req, res){
        console.log(req);
        res.status(204).send();
    });

    //update a specific light - still in development
    app.post("/lights/:lightID", function(req, res) {
        console.log(req);
        res.status(204).send();
    });
}