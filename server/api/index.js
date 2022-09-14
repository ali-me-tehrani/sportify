const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const morgan = require("morgan");
const app = express();
const ErrorLog = require("../models/Error");
const routes = require("../routers/v1");
const { jwtStrategy } = require('../config/passport');

mongoose.connect("mongodb://localhost:27017/sportify", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

app.use((req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "https://game.fanoospfm.com");
    // res.header("Access-Control-Allow-Headers", "*");
    // if (req.method === "OPTIONS") {
    //     res.header(
    //         "Access-Control-Allow-Methods",
    //         "PUT, POST, PATCH, DELETE, GET, OPTIONS"
    //     );
    //     return res.status(200).json({});
    // }
    next();
});

app.use("/v1", routes);

app.use((err, req, res, next) => {
    res.status(err.status || err.httpCode || 500).json({
        message: err.errorMessage || err.message,
    });
    const errorLog = new ErrorLog({
        message: err.errorMessage || err.message,
        status: err.status || err.httpCode || 500,
        user_id: req.user && req.user._id,
        request_body: req.body,
        request_url: req.url,
    });
    errorLog.save();
});

if (require.main === module) {
    const port = 3001;
    app.listen(port, () => {
        console.log(`API server listening on port ${port}`)
    }).setTimeout(1_000_000)
};

module.exports = app