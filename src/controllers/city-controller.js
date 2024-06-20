const {cityService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/*
    POST: /cities
    req-body: {
        name: 'London'
    }

*/

async function createCity(req,res) {

    try {
        const city = await cityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

/*
    DELET: /airplane/:id
    req-body: {}

*/

async function destroyCity(req,res) {

    try {
        const city = await cityService.destroyCity(req.params.id);
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

/*
    PATCH: /airplane/:id
    req-body: {
        name: 'Paris'
    }

*/

async function updateCity(req,res) {

    try {
        const airplane = await cityService.updateCity(req.params.id,{
            name: req.body.name
        });
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

module.exports = {
    createCity,
    destroyCity,
    updateCity
}
