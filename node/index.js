import http from "node:http";
import fs from "fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 8080;
const hostname = "http://localhost:8080/";

const server = http.createServer((req, res) => {
  const { host, url, method } = req;

  const correctedUrl = path.join(__dirname, "/pages");

  const routes = {
    "/index.html": "index.html",
    "/contact": "contact-me.html",
    "/about": "about.html",
  };

  const route = routes[url] || "404.html";

  fs.readFile(correctedUrl + "/" + route, (err, data) => {
    if (err) {
      console.error(err);
      res.writeHead(500);
      res.end("Server Error");
      return;
    }
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.write(data);
    res.end();
  });
});

server.listen(port, () => {
  console.log("Server is live!");
});
