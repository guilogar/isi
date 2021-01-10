'use strict';

const express = require('express');
const router = express.Router();

const { 
    SmartRural, OpenCeilingGreenHouse, Irrigate,
    CanOpenWallGreenhouse, CanFertilizer
} = require('../database/models');
const sequelize = require('../database/sequelize');

router.get('/', async (req, res) => {
    await sequelize.sync();

    const sensorId = req.query.sensorId;
    const dateInit = req.query.dateInit;
    const dateEnd = req.query.dateEnd;

    let smartRural = [];
    let whereSmartRural = {};

    if(sensorId !== undefined)
    {
        whereSmartRural.sensorId = sensorId;
    }
    if(dateInit !== undefined)
    {
        whereSmartRural.date = dateInit;
    }
    if(dateEnd !== undefined)
    {
        whereSmartRural.date = dateEnd;
    }

    if(Object.keys(whereSmartRural).length === 0)
    {
        smartRural = await SmartRural.findAll({
            group: ['sensorId']
        });
    } else
    {
        smartRural = await SmartRural.findAll({
            where: whereSmartRural,
            group: ['sensorId']
        });
    }

    res.status(200).send({
        smartRural: smartRural
    });
});

router.get('/OpenCeilingGreenHouse', async (req, res) => {
    await sequelize.sync();

    res.status(200).send({
        OpenCeilingGreenHouse: await OpenCeilingGreenHouse.findAll()
    });
});

router.get('/Irrigate', async (req, res) => {
    await sequelize.sync();

    res.status(200).send({
        Irrigate: await Irrigate.findAll()
    });
});

router.get('/CanFertilizer', async (req, res) => {
    await sequelize.sync();

    res.status(200).send({
        CanFertilizer: await CanOpenWallGreenhouse.findAll()
    });
});

router.get('/CanOpenWallGreenhouse', async (req, res) => {
    await sequelize.sync();

    res.status(200).send({
        CanOpenWallGreenhouse: await CanFertilizer.findAll()
    });
});

router.post('/', async (req, res) => {
    res.status(200).send({
        msg: 'created!'
    });
});

router.put('/', async (req, res) => {
    res.status(200).send({
        msg: 'updated!'
    });
});

router.delete('/', async (req, res) => {
    res.status(200).send({
        msg: 'deleted!'
    });
});

module.exports = router;