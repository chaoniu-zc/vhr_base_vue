// var mysql = require('mysql')
// // import mysql from 'mysql'
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     port: 3306,
//     database: 'myvhr'
// })
// var str = `SELECT * FROM base_elem`;
// const getSqlData = new Promise((resolve, reject) => {
//     connection.query(str, (err, result) => {
//         if (result) {
//             resolve(result)
//         } else {
//             reject('查询失败')
//         }
//     })
// })
// const postSqlData = new Promise((resolve, reject) => {
//     connection.query(str, (err, result) => {
//         if (result) {
//             resolve(result)
//         } else {
//             reject('更新失败')
//         }
//     })
// })


// getsqldata.then((result) => {
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// })
var regx=/^:$/
let obj={
    a:"",
    b:'',
    c:''
}
var str=JSON.stringify(obj)
console.log(str.slice(1,str.length-2).replace(/:/g,'='))