const {StatusCodes} = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest (req, res, next) {
    ErrorResponse.message = 'Something went wrong while creating city';
    ErrorResponse.error = new AppError(['City name is not found in the incomming request'], StatusCodes.BAD_REQUEST)
    if(!req.body.name) {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next(); 
}

module.exports = {
    validateCreateRequest
}