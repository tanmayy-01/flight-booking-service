const {airplaneService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/*
    POST: /airplane
    req-body: {
        modelNumber: 'airbusa320',
        capacity: 200
    }

*/

async function createAirplane(req,res) {

    try {
        const airplane = await airplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

/*
    GET: /airplane
    req-body: {}

*/

async function getAirplanes(req,res) {

    try {
        const airplane = await airplaneService.getAirplanes();
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

/*
    GET: /airplane/:id
    req-body: {}

*/

async function getAirplane(req,res) {

    try {
        const airplane = await airplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

/*
    DELET: /airplane/:id
    req-body: {}

*/

async function destroyAirplane(req,res) {

    try {
        const airplane = await airplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

/*
    PATCH: /airplane/:id
    req-body: {
        capacity: 490
    }

*/

async function updateAirplane(req,res) {

    try {
        const airplane = await airplaneService.updateAirplane(req.params.id,{
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}

