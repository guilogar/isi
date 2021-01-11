const { Model, DataTypes } = require('sequelize');

const sequelize = require('../sequelize');

class CanOpenWallGreenhouse extends Model {}

CanOpenWallGreenhouse.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    date: DataTypes.DATE
}, {
    sequelize,
    modelName: 'CanOpenWallGreenhouse',
    freezeTableName: true,
    tableName: 'CanOpenWallGreenhouse',
    timestamps: false,
});

module.exports = CanOpenWallGreenhouse;