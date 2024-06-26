const CrudRepository  = require('./crud-repository');
const { Flight } = require('../models');

class FlightReopository extends CrudRepository {
    
    constructor() {
        super(Flight);
    }

    async getAllFlights(filter) {
        console.log('---------------',filter)
        const response = await Flight.findAll({
            where: filter
        });
        console.log('######################',response)
        return response;
    }
}

module.exports = FlightReopository;