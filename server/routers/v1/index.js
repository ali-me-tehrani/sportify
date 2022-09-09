const express = require('express');
const gamesRoute = require('./game.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/games',
        route: gamesRoute,
    },
];


defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});


module.exports = router;