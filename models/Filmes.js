import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Filmes = connection.define("filmes", {
  file: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  classificacao: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
Filmes.sync({ force: false });
export default Filmes;
