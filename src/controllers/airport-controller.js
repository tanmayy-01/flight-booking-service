const {airportService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/*
    POST: /airport
    req-body: {
        name: 'IGI',
        code: 'DEL',
        cityId: 2
    }

*/

async function createAirport(req,res) {

    try {
        const airport = await airportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

/*
    GET: /airport
    req-body: {}

*/

async function getAirports(req,res) {

    try {
        const airport = await airportService.getAirports();
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

/*
    GET: /airport/:id
    req-body: {}

*/

async function getAirport(req,res) {

    try {
        const airport = await airportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

/*
    DELET: /airport/:id
    req-body: {}

*/

async function destroyAirport(req,res) {

    try {
        const resopnse = await airportService.destroyAirport(req.params.id);
        SuccessResponse.data = resopnse;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

/*
    PATCH: /airport/:id
    req-body: {
        capacity: 490
    }

*/

async function updateAirport(req,res) {

    try {
        const airport = await airportService.updateAirport(req.params.id,{
            name: req.body.name,
            code: req.body.code
        });
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}

