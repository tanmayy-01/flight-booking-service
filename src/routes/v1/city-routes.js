const express = require('express');
const { CityController } = require('../../controllers');
const {CityMiddlewares} = require('../../middlewares')

const router = express.Router();

// /api/v1/city POST
router.post(
  '/',
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
); 

// /api/v1/city/:id DELETE
router.delete(
  '/:id',
  CityController.destroyCity
); 


module.exports = router;
