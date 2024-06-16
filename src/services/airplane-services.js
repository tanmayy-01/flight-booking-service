const {AirplaneReopository} = require('../repositories');

const airplaneRepository = new AirplaneReopository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createAirplane
}