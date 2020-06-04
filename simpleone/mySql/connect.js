var mysql = require('mysql')
var bodypaser = require('body-parser')
var bosdyjson = bodypaser.json()
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'myvhr'
})

function mysqlbase(type, sqlstr) {
    switch (type) {
        case 'get':
            return new Promise((resolve, reject) => {
                connection.query(sqlstr, (err, result) => {
                    if (result) {
                        resolve(result)
                    } else {
                        reject(err)
                    }
                })
            });
        case 'post':
            return new Promise((resolve, reject) => {
                connection.query(sqlstr, bosdyjson, (err, result) => {
                    if (result) {
                        resolve(result)
                    } else {
                        reject('更新失败')
                    }
                })
            });
    }
}
module.exports=mysqlbase