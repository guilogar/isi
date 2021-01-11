const { Model, DataTypes } = require('sequelize');

const sequelize = require('../sequelize');

class SmartRural extends Model {}

SmartRural.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    sensorId:                 DataTypes.BIGINT,
    roomTemperature:          DataTypes.FLOAT,
    airHumidity:              DataTypes.FLOAT,
    groundHumidity:           DataTypes.FLOAT,
    litrePerMeterWater:       DataTypes.FLOAT,
    windForce:                DataTypes.FLOAT,
    windDirection:            DataTypes.FLOAT,
    countIllumination:        DataTypes.FLOAT,
    isRaining:                DataTypes.BOOLEAN,
    isCeilingGreenhouseOpen:  DataTypes.BOOLEAN,
    isWallGreenhouseOpen:     DataTypes.BOOLEAN,
    isAtDaytime:              DataTypes.BOOLEAN,
    canPhotosynthesisImprove: DataTypes.BOOLEAN,
    date:                     DataTypes.DATE
}, {
    sequelize,
    modelName: 'SmartRural',
    freezeTableName: true,
    tableName: 'SmartRural',
    timestamps: false,
});

module.exports = SmartRural;