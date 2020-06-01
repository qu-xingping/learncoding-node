let fs = require('fs')
// 异步写入
// fs.writeFile('test.txt','写入文件成功',{flags:'a+',encoding:'utf-8'},function (err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('写入成功')
//     }
// })

// 异步封装追加写入
function myWrite(path,content){
    return new Promise(function(resolve,reject){
        fs.appendFile(path,content,{flags:'a',encoding:'utf-8'},function (err){
            if(err){
                reject(err)
            }else{
                resolve('写入成功!!!')
            }
        })
    })
}


async function ms(){
    await myWrite('test.txt','下午好是1！');
    await myWrite('test.txt','下午好是2！');
    await myWrite('test.txt','下午好是3！');
    await myWrite('test.txt','下午好是4！');
}

ms()