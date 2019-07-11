const express = require('express');
const app = express();
const router = require('./src/app/routes/routes.config');
const httpConfig = require('./src/app/config/env.config').http;
const bodyParser = require('body-parser');

app.use(bodyParser.json("application/json"));
router.config(app);

app.use(function (req, res, next) {
    debugger;
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (typeof req.body != "object") {
        req.body = JSON.parse(req.body);
    }
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

//app.use(bodyParser.json());
//AuthorizationRouter.routesConfig(app);
//UsersRouter.routesConfig(app);
router.config(app);

app.listen(httpConfig.port, function () {
    console.log('app listening at port %s', httpConfig.port);
});


