// const mysql=require('mysql2')
// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-complete',
//     password:'Maina12345'
// })

// module.exports=pool.promise()

const Sequelize=require('sequelize')

const sequelize=new Sequelize('node-complete','root','Maina12345',
{
    dialect:'mysql',
host:'localhost'
})

module.exports=sequelize;