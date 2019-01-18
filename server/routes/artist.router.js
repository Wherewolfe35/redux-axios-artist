// artist.router.js

const express = require('express');
const router = express.Router();
// Using a array of data on the server, we will eventually
// move this back into the database.
const artists = require('../modules/artist.data');

router.delete('/:id', (req, res) => {
    artists.splice(req.params.id, 1);
    res.sendStatus(200);
})

// GET all the books
router.get('/', (req, res) => {
    res.send(artists);
}); // END GET Route

module.exports = router;