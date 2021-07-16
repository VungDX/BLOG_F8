var express = require('express');
const router = express.Router();
const indexController = require('../app/controllers/SiteController');

router.get('/search', indexController.search);
router.get('/', indexController.index);

module.exports = router;
