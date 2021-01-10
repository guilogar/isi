const { Model, DataTypes } = require('sequelize');

const sequelize = require('../sequelize');

class CanFertilizer extends Model {}

CanFertilizer.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    date: DataTypes.DATE
}, { sequelize, modelName: 'CanFertilizer' });

module.exports = CanFertilizer;