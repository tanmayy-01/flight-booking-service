const CrudRepository  = require('./crud-repository');
const { Flight } = require('../models');

class FlightReopository extends CrudRepository {
    
    constructor() {
        super(Flight);
    }
}

module.exports = FlightReopository;