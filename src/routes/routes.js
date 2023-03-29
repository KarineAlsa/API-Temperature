const express=require("express");
var temperatureController = require('../controllers/temperatureController.js');
const router =express.Router();


router.route('/temperature').post(temperatureController.temperaturetoPatient);


module.exports=router;