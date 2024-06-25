const {StatusCodes} = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest (req, res, next) {
    if(!req.body.flightNumber) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['flightNumber is not found in the incomming request'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if(!req.body.airplaneId) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['airplaneId is not found in the incomming request'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if(!req.body.departureAirportId) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['departureAirportId is not found in the incomming request'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if(!req.body.arraivalAirportId) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['arraivalAirportId is not found in the incomming request'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if(!req.body.arraivalTime) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['arraivalTime is not found in the incomming request'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if(!req.body.departureTime) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['departureTime is not found in the incomming request'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if(!req.body.price) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['price is not found in the incomming request'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if(!req.body.totalSeats) {
        ErrorResponse.message = 'Something went wrong while creating a flight';
        ErrorResponse.error = new AppError(['totalSeats is not found in the incomming request'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next(); 
}

module.exports = {
    validateCreateRequest
}