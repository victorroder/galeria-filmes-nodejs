//IMPORTANDO O SEQUELIZE
import { Sequelize } from "sequelize";

//CRIAR DADOS DE CONEXÃO COM O BD
const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "", //OS ALUNOS DEVEM DEIXAR EM BRANCO
  database: "galeriaFilmes", //USE LOJA; INICIO O PROJETO COM ESSA LINHA COMENTADA
  timezone: "-03:00",
});
export default connection;
