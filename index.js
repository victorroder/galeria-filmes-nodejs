import express from "express";
import multer from "multer";
import connection from "./config/sequelize-config.js";
import Filmes from "./models/Filmes.js";
const app = express();

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

connection
  .query(`CREATE DATABASE IF NOT EXISTS galeriaFilmes;`)
  .then(() => {
    console.log("Banco de dados já criado.");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.static("public"));
app.set("view engine", "ejs");

const upload = multer({ dest: "public/uploads" });

app.get("/", (req, res) => {
  Filmes.findAll().then((filmes) => {
    res.render("index", {
      filmes: filmes,
    });
  });
});

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file.filename;
  const titulo = req.body.titulo;
  const ano = req.body.ano;
  const classificacao = req.body.classificacao;
  Filmes.create({
    file: file,
    titulo: titulo,
    ano: ano,
    classificacao: classificacao,
  });
  res.redirect("/")
});

const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
