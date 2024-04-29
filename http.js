var http=require('http');
// http.createServer(function(req,res){
// res.writeHead(200,{'Content-type':'text/plain'});
// res.end('HELLO JII');
// }).listen(8080);
// var dt=require('./myfirstmodule');
// var url=require('url');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     var q=url.parse(req.url,true).query;
//     var t=q.year+","+q.month;
//     // res.write(req.url);
//     res.end(t);
// }).listen(8080);
var fs=require('fs');
// http.createServer(function(req,res){
//     fs.readFile('dex.html',function(err,data){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

// fs.writeFile('.txt','hello2',function(err){
//     if(err) throw err;
//     console.log('Saved!');
// });


// var form=require('formidable');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'tet/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('input type="file" name="filetoupload"><br>');
//     res.write('</form');
//     return res.end();

// }).listen(8080);


var url=require('url');
// var add='http://localhost:8080/default.htm?year=2017&month=february';
// var q=url.parse(add,true);
// console.log(q.host);
// console.log(q.pathname);
// var qdaata=q.query;
// console.log(qdaata.month);


// fs.writeFile('summer.txt','summer is hot',function(err){
//     if(err) throw err;
//     console.log('Saved!');
// });
// fs.writeFile('winter.txt','winter is cold',function (err){
//     if(err) throw err;
//     console.log("lololo");

// });



// http.createServer(function(req,res){
//     var q=url.parse(req.url,true);
//     var filename="."+q.pathname;
//     console.log(filename);
//     fs.readFile(filename,function(err,data){
//         if(err){
//             res.writeHead(404,{'Content-Type':'text/html'});
//             return res.end("404 not found");
//         }
//         res.writeHead(200,{'Content-type':'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

// var uc=require('upper-case');
// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'text/html'});
//        res.write(uc.upperCase("jai shree ram"));
//        res.end();
// }).listen(8080);
// var http = require('http');
// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(8080);

//  events ::
// var fs = require('fs');
// var rs = fs.createReadStream('./demofile.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });

//upload files ->>
// var http = require('http');
// var formidable = require('formidable');

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       res.write('File uploaded');
//       res.end();
//     });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);

// mailing->
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'codedevdex@gmail.com',
    pass: 'Dexter@28'
  }
});

var mailOptions = {
  from: 'codedevdex@gmail.com',
  to: 'imdevdengrae@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});