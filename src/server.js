const express = require("express");
const server = express();

//PEGAR O BANCO DE DADOS
const db = require("./database/db");

//UTILIZANDO TEMPLATE ENGINE
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

//CONFIGURAR CAMINHOS DA APLICAÇÃO
//PAGINA INICIAL
//req: requisicao
//res: respostas
//CONFIGURAR PASTA PUBLICA
server.use(express.static("public"));

server.get("/", (req, res) => {
  return res.render("index.html", { title: "Um titulo" });
});

server.get("/create-point", (req, res) => {
  return res.render("create-point.html");
});

server.get("/search", (req, res) => {
  //PEGAR OS DADOS DO BANCO DE DADOS
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    console.log("Aqui estão seus registros: ");
    console.log(rows);
  });
  return res.render("search-results.html", { rows });
});
//LIGAR O SERVIDOR
server.listen(3000);
