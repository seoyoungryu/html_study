const http = require('http');
const hostname = '127.0.0.1';
const port = 3333;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // 메세지 출력
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('hellow world');
    // 화면출력
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> hellow world </h1>');
});
server.listen(port, hostname, () => {
    console.log(`server running
http://${hostname}:${port}/`);
});