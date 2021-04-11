const express = require("express");
const server = express();

//CONFIGURAR CAMINHOS DA APLICAÇÃO
//PAGINA INICIAL
//req: requisicao
//res: respostas
//CONFIGURAR PASTA PUBLICA
server.use(express.static("public"));
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
server.get("/create-point", (req, res) => {
  res.sendFile(__dirname + "/views/create-point.html");
});
//LIGAR O SERVIDOR
server.listen(3000);
