const express = require('express');
const mailController = require('../controllers/mail');

const router = express.Router();

router.post('/mail', mailController.mail);

module.exports = router;