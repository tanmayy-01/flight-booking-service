'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsTo(models.City, {
          foreignKey: 'cityId',
        });

        this.hasMany(models.Flight, {
          foreignKey: 'departureAirportId',
          onDelete: 'CASCADE'
        })

        this.hasMany(models.Flight, {
          foreignKey: 'arraivalAirportId',
          onDelete: 'CASCADE'
        })
    }
  }
  Airport.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      unique: true
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};