const express = require('express');
const router = express.Router();
const Players = require('../models/player');
const Characters = require('../models/character');
const campaigns = require('../models/campaign')


router.get('/', (req, res) => {
    res.send("Hello World!")
});

// INDEX
router.get('/players', async (req, res) => {
    try {
        res.json(await Players.find({}));
    } catch (error) {
        res.status(400).json(error);
    };
});

router.get('/characters', async (req, res) => {
    try {
        res.json(await Characters.find({}));
    } catch (error) {
        res.status(400).json(error);
    };
});

router.get('/campaigns', async (req, res) => {
    try {
        res.json(await Campaigns.find({}));
    } catch (error) {
        res.status(400).json(error);
    };
});


// DELETE
router.delete('/players', async (req, res) => {
    try {
        res.json(await Players.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    };
});

router.delete('/characters', async (req, res) => {
    try {
        res.json(await Characters.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    };
});

router.delete('/campaigns', async (req, res) => {
    try {
        res.json(await Campaigns.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    };
});


// UPDATE
router.put('/players/:id', async (req, res) => {
    try {
        res.json(
            await Players.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })
        )
    } catch (error) {
        res.status(400).json(error);
    };   
});

router.put('/characters/:id', async (req, res) => {
    try {
        res.json(
            await Characters.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })
        )
    } catch (error) {
        res.status(400).json(error);
    };   
});

router.put('/campaigns/:id', async (req, res) => {
    try {
        res.json(
            await Campaigns.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            })
        )
    } catch (error) {
        res.status(400).json(error);
    };   
});


// CREATE
router.post('/player', async (req, res) => {
    try {
        res.json(await Players.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    };
});

router.post('/character', async (req, res) => {
    try {
        res.json(await Characters.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    };
});

router.post('/campaigns', async (req, res) => {
    try {
        res.json(await Campaigns.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    };
});

module.exports = router;