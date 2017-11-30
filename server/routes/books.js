const express = require('express');
const router = express.Router();
const config = require('../config');
const { Pool } = require('pg');

/* GET  Books by title */
router.route('/by-title/:titlePart')
  .get(function (req, res) {
    const pool = new Pool(config.db.connString)

    pool.connect()
      .then(client => {
        return client.query(`SELECT * FROM books WHERE title LIKE '%${req.params.titlePart}%'`)
          .then(resp => {
            client.release()
            res.send(resp.rows);
          })
          .catch(e => {
            client.release()
            console.log(err.stack)
          })
      })

  })

/* GET  Books by author */
router.route('/by-author/:authorPart')
  .get(function (req, res) {
    const pool = new Pool(config.db.credentials)

    pool.connect()
      .then(client => {
        return client.query(`SELECT * FROM books WHERE author LIKE '%${req.params.authorPart}%'`)
          .then(resp => {
            client.release()
            res.send(resp.rows);
          })
          .catch(e => {
            client.release()
            console.log(err.stack)
          })
      })

  })

module.exports = router;
