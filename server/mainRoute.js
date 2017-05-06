/**
 * Created by User on 02.05.2017.
 */

const express = require('express');
const home = require('../controllers/pages');
const router = express.Router();

router.use(function (req, res, next) {
    console.log('handler for all requests was called');
    next();
});

router.get('/', home.homePage);

router.get('/join', home.homePage);


module.exports = router;