const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1> home page </h1>");
  }
});

server.listen(port, () => console.log(`run in port ${port}`));
