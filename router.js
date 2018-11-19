const express = require('express');
const router = express.Router();

const mainController = require('./app/presenters/main');

router.get('/', mainController.getMainPage);

router.post('/user', mainController.addNewUser);

module.exports = router;
