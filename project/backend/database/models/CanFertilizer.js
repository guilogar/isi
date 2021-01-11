const { Model, DataTypes } = require('sequelize');

const sequelize = require('../sequelize');

class CanFertilizer extends Model {}

CanFertilizer.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    date: DataTypes.DATE,
    message: DataTypes.STRING
}, {
    sequelize,
    modelName: 'CanFertilizer',
    freezeTableName: true,
    tableName: 'CanFertilizer',
    timestamps: false,
});

module.exports = CanFertilizer;