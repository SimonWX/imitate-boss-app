const express = require('express')
const mongoose = require('mongoose')

// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
// 该信息用于反馈链接成功状态回显 可以去掉
mongoose.connection.on('connected', function(){
  console.log('mongo connect success')
})
// 类似于mysql的表，mongo里有文档，字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))

//新建app
const app = express()

// 新增数据
// User.create({
//   user: 'zhaotingting',
//   age: 22
// }, function(err,doc){
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })

// 删除数据
// User.remove({age: 18}, function(err,doc){
//   if(!err){
//     console.log('delete success')
//     User.find({}, function(e,d){
//       cpnsole.log(d)
//     })
//   }
// })

// 更新数据
// User.update({'user':'xuhao'},{'$set':{age:26}},function(err,doc){
//   console.log(doc)
// })

// 查询数据
/**
 * 如果不填入数据，则查询所有数据，否则填入要过滤的条件，则根据条件进行回显
 * 如果查出一条或多条，则是用find()方法 返回的数据结构是array
 * 如果要查一条, 则用findOne()方法 只查找一条符合过滤条件的，就返回不再查找，返回的数据结构是对象
 */
app.get('/data',function(req,res){
  User.findOne({user:'zhaotingting'},function(err, doc){
    res.json(doc)
  })
})

app.get('/',function(req,res){
  res.send('<h1>Hello,World</h1>')
})


// app.get('/delete',function(){

// })

app.listen(9093,function(){
  console.log('Node app start at port 9093')
})