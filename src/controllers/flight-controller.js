const {flightServices} = require('../services');
const {StatusCodes} = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/*
    POST: /flight
    req-body: {
        flightNumber: 'UK 808',
        airplaneId: 'a380',
        departureAirportId: 6,
        arraivalAirportId: 5,
        arraivalTime: '11:10:00',
        departureTime: '09:10:00',
        price: 2000,
        boardingGate: '12A',
        totalSeats: 120,
    }

*/

async function createFlight(req,res) {

    try {
        const flight = await flightServices.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arraivalAirportId: req.body.arraivalAirportId,
            arraivalTime: req.body.arraivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,
        });
        SuccessResponse.data = flight;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

async function getAllFlights(req,res) {
    try {
        const flights = await flightServices.getAllFlights(req.query);
        SuccessResponse.data = flights;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}

module.exports = {
    createFlight,
    getAllFlights
}

