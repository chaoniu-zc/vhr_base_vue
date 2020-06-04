var mysql = require('mysql')
// import mysql from 'mysql'
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'myvhr'
})
module.exports=connection