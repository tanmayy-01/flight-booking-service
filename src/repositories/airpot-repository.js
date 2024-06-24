const CrudRepository  = require('./crud-repository');
const { Arport } = require('../models');

class AirportReopository extends CrudRepository {
    
    constructor() {
        super(Arport);
    }
}

module.exports = AirportReopository;