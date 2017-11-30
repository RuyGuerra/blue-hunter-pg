const express = require('express');
const router = express.Router();
const config = require('../config');
const { Pool } = require('pg');
//const cs = 'postgres://lcnnkbycdksnhb:205b291ff92ab2410f96b2bd731d8edb21e6432d4f6460aba8e1b8ad5fcbf274@ec2-54-221-196-253.compute-1.amazonaws.com:5432/d8grjto4jvsmmv?ssl=true'

/* GET Users by name */
router.route('/by-name/:namePart')
  .get(function (req, res) {
    const pool = new Pool(config.db.connString)
    
      pool.connect()
      .then(client => {
        return client.query( `SELECT * FROM users WHERE "fullName" LIKE '%${req.params.namePart}%'`)
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
