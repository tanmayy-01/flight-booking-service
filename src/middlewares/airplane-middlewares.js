const {StatusCodes} = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');

function validateCreateRequest (req, res, next) {
    ErrorResponse.message = 'Something went wrong while creating a airplane';
    ErrorResponse.error = { explanation: 'Model number is not found in the incomming request'};
    if(!req.body.modelNumber) {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next(); 
}

module.exports = {
    validateCreateRequest
}