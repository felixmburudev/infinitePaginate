const express = require('express')
const router = express.Router()
const creatC = require('../Config/db')
const mysql = require('mysql2')
const db = creatC()

router.get('/', (req, res)=> {
    const page = req.query.page || 1
    const limit = 50; // Number of records per page
    const offset = (page - 1) * limit; // Calculate the offset
    const sqlquery = 'SELECT * FROM film LIMIT ?,? '
    db.query(sqlquery, [offset, limit], (error, result) => {
        if (error) {
            console.log('error while retrieving to db ' + error)
        } else {
            console.log(result.length)
            res.json(result)
        }
    })
})
module.exports = router