// Usamos esta arquitectura escalable y buenas practicas.
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "sigfvidb.mysql.database.azure.com",
  user: "Rooot",
  password: "R0o0o00t..",
  database: "sofacto",
});

db.connect((err) => {
  if (err) {
    console.error("Errorr al conectar en la base de datos", err);
    return;
  }
  console.log("Conexion Existosa a la base de datos.");
});

process.on("SIGINT", () => {
  db.end();
  process.exit();
});

module.exports = db;
