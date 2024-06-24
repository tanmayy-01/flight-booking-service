const CrudRepository  = require('./crud-repository');
const { Airport } = require('../models');

class AirportReopository extends CrudRepository {
    
    constructor() {
        super(Airport);
    }
}

module.exports = AirportReopository;