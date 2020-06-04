// 引入express框架
var express = require('express');
// 处理处理请求的json参数
var bodypaser = require('body-parser')
// cookie信息设置
var cookieparser = require('cookie-parser')
// 处理请求的json参数
var bosdyjson = bodypaser.json()
// 引入数据库查询
var connection = require('./database/connect')
// 引入数据库查询
var mysqlbase = require('./mySql/connect')
// 引入员工查询sql语句
var elemsql = require('./mySql/sql/elembase')
// 创建express实例对象
var app = express();
// 注入cookie中间件
app.use(cookieparser());


// 获取员工数据接口
app.get('/elembaseinfo', (req, res) => {
    // 获取
    mysqlbase('get', elemsql.elembaseinfo).then(result => {
        result.forEach(item => {
            if (item['birthday']) {
                item['birthday'] = `${item['birthday'].getFullYear()}-${item['birthday'].getMonth() + 1}-${item['birthday'].getDay() + 1}`
            }
            if (item['intojob']) {
                item['intojob'] = `${item['intojob'].getFullYear()}-${item['intojob'].getMonth() + 1}-${item['intojob'].getDay() + 1}`
            }
        })
        res.send(result)
    }).catch(err => {
        console.log(err)
    })
    // 修改
})
// 修改员工数据
var aa = {
    elemname: "小明",
    unitname: 3,
    jobname: 105,
    elemid:1009
}
var stra=JSON.stringify(aa)

app.get('/aaa', (req, res) => {
    mysqlbase('get',`update base_elem set ${stra.slice(1,stra.length-2).replace(/:/g,'=')}`).then(result=>{
        console.log(result)
        res.send(result,stra)
    }).catch(err=>{
        console.log(stra.slice(1,stra.length-2).replace(/:/g,'='))
        res.send(err)
    })
})
//获取管理员接口
app.get('/adminer', (req, res) => {
    connection.query(
        "SELECT\
            u.elemid,\
            u.elemname,\
            n.unitname,\
            u.status\
        FROM\
            base_elem e,\
            unit n,\
            USER u\
        WHERE e.`elemid` = u.`elemid`\
             AND u.`unitid` = n.`unitid`",
        (err, result) => {
            if (result) {
                res.send(result)
            } else {
                console.log(err)
            }
        })
})
// 管理员权限接口
app.post('/chadmin', bosdyjson, (req, res) => {
    var value = Number(req.body.status)
    var elemid = Number(req.body.elemid)
    connection.query(
        `update 
            user 
        set 
            status=${value} 
        where 
            elemid=${elemid}`,
        (err, result) => {
            if (err) {
                console.log('修改失败')
            }
        })
})
// 部门管理
app.get('/unit', (req, res) => {
    connection.query(
        `SELECT
        u.unitid,
        u.unitname,
        u.unitlader
    FROM
        unit u`,
        (err, result) => {
            if (err) {
                console.log('修改失败')
            } else {
                res.send(result)
            }
        })
})
// 职位接口
app.get('/job', (req, res) => {
    connection.query(
        `SELECT
        *
    FROM
        job `,
        (err, result) => {
            if (err) {
                console.log('修改失败')
            } else {
                res.send(result)
            }
        })
})
//查看部门职位
app.post('/unitjob', bosdyjson, (req, res) => {
    var value = Number(req.body.unitid)
    connection.query(
        `select 
            jobname 
        from
            job
        where 
            belongunit=${value}`,
        (err, result) => {
            if (err) {
                console.log('修改失败')
            } else {
                res.send(result)
            }
        })
})
//登录验证接口
app.post('/signup', bosdyjson, (req, res) => {
    const { username, password } = req.body;
    let matching = false
    connection.query(
        `select 
            username,password
        from
            user`,
        (err, result) => {
            if (err) {
                console.log('修改失败')
            } else {
                console.log(result)
                result.map(item => {
                    item['username'] == username && item['password'] == password ? matching = true : matching
                })
                if (matching) {
                    res.cookie('username', `${username}`)
                    res.send('欢迎登录')
                }

            }
        })
})
var server = app.listen(8000, (req, res) => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('正在监听')
})
