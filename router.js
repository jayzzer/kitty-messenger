const express = require('express');
const router = express.Router();

const mainPresenter = require('./app/presenters/main');

router.get('/', mainPresenter.getMainPage);

module.exports = router;