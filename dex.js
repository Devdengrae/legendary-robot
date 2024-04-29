const num=10
if(num>5) console.log('higherrrr')
else console.log('Dexter')
console.log(__dirname)

function dexy(){
    console.log("dev is dexy")
}
// var intervalid=setInterval(dexy,9000)

// const name="kara"
require('./4-module') 
const devil =require('./3-module')
function sayHi(name){
    console.log('hello', name,devil  ,'fofo' );
}
sayHi('dexy');
const os=require('os')
const fo=os.userInfo();
// console.log(fo);
console.log('Up time',os.uptime())
const curr={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log('current os is : ',curr);

const path= require('path');
console.log(path.sep)
const filepat=path.join('/content','subfolder')
console.log(filepat);

const basee=path.basename(filepat);
console.log(basee);

const abs=path.resolve(__dirname,'content','subfolder')
console.log(abs);

//module - fs
const {readFile}=require('fs')
readFile('./cont/first.txt','utf8',(err,result){
    if(err){
        console.log(err);
        return;
    }
    console.log(result)

    readFile('./cont/second.txt','utf8')
})

console.log(first,second)

writeFileSync('./cont/result.txt',second);
