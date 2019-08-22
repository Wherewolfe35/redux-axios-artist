// artist.router.js
const pool = require('../modules/pool')
const express = require('express');
const router = express.Router();
// Using a array of data on the server, we will eventually
// move this back into the database.
let artists = require('../modules/artist.data');
let nextId = artists.length;

router.delete('/:id', (req, res) => {    
    // TODO: Use filter to remove the artist
    // artists = artists.filter(...)
    let thisId = req.params.id;
    console.log('Deleting artist: ', thisId, 'from', artists);
    // artists = artists.filter(artist => artist.id != thisId);
    // res.sendStatus(200);

    let queryText = `DELETE FROM "artists" WHERE "id" = $1;`;
    pool.query(queryText, [thisId])
    .then((result) => {
        console.log(result);
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

// POST the books
router.post('/', (req, res) => {
    const artistToAdd = req.body;
    console.log('In artist POST with', artistToAdd);
    // add an id to the incoming artist
    // artistToAdd.id = nextId;
    // nextId += 1;
    // artists.push(artistToAdd);
    // res.send(201);

    let queryText = `INSERT INTO "artists" ("name", "birthyear", "deathyear") Values ($1, $2, $3);`;
    pool.query(queryText, [artistToAdd.name, artistToAdd.birthyear, artistToAdd.deathyear])
    .then((result) => {
        console.log('Succesfully ', result);
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
}); // END POST Route

// GET all the books
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "artists";`;
    pool.query(queryText).then((result) => {
        console.log('here is result from database', result.rows);
        res.send(result.rows)
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;