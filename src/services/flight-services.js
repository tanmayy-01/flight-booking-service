const {FlightRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
const { query } = require('../config/logger-config');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message)
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new Flight object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query) {
    // trips = MUM-DEL
    let customFilter = {};
    if(query.trips) {
        [departureAirportId, arraivalAirportId] = query.trips.split("-")
        customFilter.departureAirportId = departureAirportId;
        customFilter.arraivalAirportId = arraivalAirportId;
    }
    console.log(customFilter)
    try {
        console.log('inside...................')
        const flights = await flightRepository.getAllFlights(customFilter);
        console.log('res...................',flights)
        return flights; 
    } catch (error) {
        throw new AppError('Cannot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



module.exports = {
    createFlight,
    getAllFlights
}