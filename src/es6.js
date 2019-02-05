// let 

// const

// 字符串模板
// name = 'xuhao'
// coures = 'React开发App'
// console.log(`hello${name},course is ${coures}`)

// 箭头函数
// const hello = (name)=>{
//   console.log(`hello, ${name}`)
// }
// hello('xuhao')

// const double = x => x*2
// console.log(double(5))

// const hello2 = (name='imooc')=>{
//   console.log(`hello, ${name}`)
// }

//老方法（解构赋值）
// function hello3(name1,name2){
//   console.log(name1,name2)
// }
// let arr = ['xuhao','xutian']
// // hello.apply(null,arr)

// //新方法
// hello3(...arr)

// 对象的拓展
// const obj = {name: 'imooc', coures: 'React开发App'}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// const name = 'imooc'
// const obj = {
//   name,
//   [name]: 'ccc',
//   hello: function(){

//   },
//   hello1(){

//   }
// }
// // obj[name] = 'hello imooc'
// console.log(obj)


// const obj = {name: 'imooc', coures: 'React'}
// const obj2 = {type: 'IT', name: 'haha'}
// console.log({...obj, ...obj2, date:'2017'})

//解构赋值
// const arr = ['hello', 'imooc']
// // 老方法
// // let arg1 = arr[0]
// // let arg2 = arr[1]
// //新方法
// let [arg1, arg2] = arr
// console.log(arg1,'|',arg2)

// const obj = {name: 'imooc', coures: 'course-----'}
// const {name,coures} = obj
// console.log(name, '|', coures)

// 类的语法糖
// class Myapp{
//   constructor(){
//     this.name = 'imooc'
//   }
//   sayHello(){
//     console.log(`hello ${this.name} !`)
//   }
// }
// const app = new Myapp()
// app.sayHello()

// ES6 新出现的数据结构
/** 
 * set, 元素不可重合
 * Map, 对象
 * Symbol 唯一的元素
*/

/**
 * ES6 自带了模块化机制，告别seajs和require
 * Import, import{}
 * Export, Export default
 * Node现在还不支持, 还需要用require来加载文件
 */
// import {name,sayHello} from './module1'
// console.log(name)
// sayHello()

// import course from './module1'
// course()

// import * as mod1 from './module1'
// console.log(mod1)

// arr = [1,2,3]
// console.log(arr.map(function(v){
//   return v*2
// }))
// console.log(arr.map(v=>v*2))

