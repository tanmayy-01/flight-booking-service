const {StatusCodes} = require('http-status-codes')

function validateCreateRequest (req, res, next) {
    if(!req.body.modelNumber) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: 'Something went wrong while creating a airplane',
            data: {},
            error: {
                explanation: 'Model number is not found in the incomming request'
            }
        })
    }
    next();
}

module.exports = {
    validateCreateRequest
}