const mysql = require('mysql2')
require('dotenv').config()

module.exports = function creatC() {
    const database = mysql.createConnection({
        host: process.DB_HOST,
        user: process.DB_USER,
        password: process.DB_PASSWORD,
        database: process.DB_NAME
    })
    database.connect((databaseError) => {
        if (databaseError) {
            console.log('An error occured while trying to connect to the databese ' + databaseError)
        }
        console.log("Connected to MYSQL database")
    })
    return database
}

