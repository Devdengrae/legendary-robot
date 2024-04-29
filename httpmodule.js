const http = require('http');
try{
    const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('main page');
    }
    else if (req.url === '/aboutjii') {
        res.end('about jii page');
    }
    else{
    res.end(`<h1>DEXTER</h1>
      <a href="/">back home</a>`);
    }
});

server.listen(5000);
}
catch(err){
    console.error('error occured',err);
}
