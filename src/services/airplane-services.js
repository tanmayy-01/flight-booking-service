const {AirplaneReopository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes')

const airplaneRepository = new AirplaneReopository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        console.log(error)
        if(error.name == 'TypeError') {
            throw new AppError('Cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR)
        }
        throw error;
    }
}

module.exports = {
    createAirplane
}