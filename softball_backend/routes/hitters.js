const express = require('express');
const router = express.Router();
const db = require('./../db');

router.get('/hitters?:limit', async (req, res) => {
    const { limit } = req.query;

    if (!!limit) {
        try {
            const response = await db.any(
                `SELECT * FROM hitters
                LIMIT ${limit};`
            )
            return res.json(response)
        } catch (error) {
            return res.json({
                error: error.message
            });
        }
    } else {
        try {
            const response = await db.any(
                `SELECT * FROM hitters;`
            )
            return res.json(response)
        } catch (error) {
            return res.json({
                error: error.message
            });
        }
    }
});

router.get('/hitters/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const response = await db.one(
            `SELECT * FROM hitters
            WHERE id=${id};`
        )
        res.json(response);
    } catch (error) {
        return res.json({
            error: error.message,
            message: 'Not found'
        });
    }
});

module.exports = router;