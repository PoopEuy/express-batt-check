import { Sequelize } from "sequelize";
import dotenv from "dotenv";
const env = dotenv.config().parsed;

const username = process.env.USER_APT_BARU;
const password = process.env.PASSWORD_APT_BARU;
const database = process.env.DATABASE_APT_BARU;
const host = process.env.DB_HOST_APT_BARU;
const dialect = process.env.DB_CONNECTION_APT_BARU;
const port = process.env.DB_PORT_EXPOSE_APT_BARU;

// module.exports = {
//   HOST: host,
//   USER: username,
//   PASSWORD: password,
//   DB: database,
//   dialect: dialect,
//   port: port,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };

// create connection
// const db = new Sequelize(database, username, password, {
//   host: host,
//   dialect: dialect,
// });

const db = new Sequelize(database, username, password, {
  host: host,
  dialect: "mysql",
});

// export connection
export default db;
