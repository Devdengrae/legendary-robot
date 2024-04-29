// synchronous way to read and write a file

// const{readFileSync,writeFileSync}=require('fs');
// const first=readFileSync('./cont/first.txt','utf8');
// const second=readFileSync('./cont/second.txt','utf8');
// writeFileSync('cont/resj.txt', `here it is, ${first},${second}`);

// asynchronous way to read and write a file

const {readFile,writeFile}=require('fs');
console.log("sstart");
readFile('./cont/first.txt','utf8',(err,reult)=>{
    if(err) {
        console.log(err);
        return err;
    }
    const first=reult;
    readFile('./cont/second.txt','utf8',(err,result)=>{
        if(err) {
            console.log(err);
        }
        const second=result;
        writeFile('./cont/res.txt',`here it is, ${first},${second}`,(err,resu)=>{
            if(err){
                console.log(err);
                return err;
            }
            console.log(resu);
            console.log("dev");
    })

    })
})
console.log("tanishka");