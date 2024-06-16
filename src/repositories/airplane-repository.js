const CrudRepository  = require('./crud-repository');
const { Airplane } = require('../models');

class AirplaneReopository extends CrudRepository {
    
    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneReopository;