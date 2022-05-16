// const os = require('os')

// //info about cur user

// const user= os.userInfo()
// console.log(user)


// // system uptime in s

// console.log(`the system uptime is ${os.uptime}`)


// const currentOS={
//     name:os.type(),
//     release: os.release(),
//     totatalMem: os.totalmem(),
//     freeMem: os.freemem()
// }
// console.log(currentOS)

// const path = require('path')
// const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(absolute)

// const{readFileSync, writeFileSync} = require('fs');
// const first = readFileSync('');


// const{readFileSync, writeFileSync, readFile} = require('fs');

// readFile('./  ', (err, res)=>{
//     if(err){
//         console.log(err)
//         return null;
//     }
//     const first = res;
//     readFile('./  ','utf-8', (err, res=>{
//         if(err){
//             console.log(err)
//             return null
//             ;
//         }


//     }))
// })

// const http = require('http');
// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         res.end("welcome to home page")

//     }
//     else if(req.url === '/about'){
//         res.end('this is my page')
//     }
//     else{
//         res.end(`
//         <h1>Oops!</h1>
//         <p>This link does not exsist</p>
//         <p> Click this link to retrun to homepage</p>
//         <a href="/">back home</>
//         `)
//     }

// })

// server.listen(5000)

