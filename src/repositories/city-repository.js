const CrudRepository  = require('./crud-repository');
const { City } = require('../models');

class CityReopository extends CrudRepository {
    
    constructor() {
        super(City);
    }
}

module.exports = CityReopository;