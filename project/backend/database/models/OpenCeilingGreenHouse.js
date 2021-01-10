const { Model, DataTypes } = require('sequelize');

const sequelize = require('../sequelize');

class OpenCeilingGreenHouse extends Model {}

OpenCeilingGreenHouse.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    date: DataTypes.DATE
}, { sequelize, modelName: 'OpenCeilingGreenHouse' });

module.exports = OpenCeilingGreenHouse;