const { Model, DataTypes } = require('sequelize');

const sequelize = require('../sequelize');

class Irrigate extends Model {}

Irrigate.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    date: DataTypes.DATE
}, { sequelize, modelName: 'Irrigate' });

module.exports = Irrigate;