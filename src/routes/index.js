const express = require('express')

const router = express.Router();

const v1ApiROutes = require('./v1/index');
router.use('/v1', v1ApiROutes);

module.exports = router;