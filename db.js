const { Sequelize } = require("sequelize");
const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);
async function checkDbConection() {
  await connection.authenticate();
  try {
    console.log(" db connection succesfull");
  } catch (e) {
    console.log("connection unsuccesfull", e.message);
  }
}
checkDbConection();

module.exports = connection;
