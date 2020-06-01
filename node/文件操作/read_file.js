let fs = require('fs')

//同步读取文件
const rf = fs.readFileSync('test.txt',{flags:'r',encoding:'utf-8'})
console.log(rf.toString())

//异步读取文件
fs.readFile('test.txt',{flags:'r',encoding:'utf-8'},function (err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

//promise封装异步方式
function myRead(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{flags:'r',encoding:'utf-8'},function (err,data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

const mf = myRead('test.txt')
mf.then(function(res){
    console.log(res)
})


//异步使用同步的方式读取多个文件
async function List(){
    
    const f1 = await myRead('test.txt')
    const f2 = await myRead(f1+'.txt')
    console.log(f2,111)
    console.log(333)
}

List()