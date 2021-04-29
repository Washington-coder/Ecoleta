const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./src/database/database.db");
module.exports = db;

// db.serialize(() => {
//CRIAR UMA TABELA
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places(
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );
// `);
//INSERIR DADOS NA TOKEN_VARIABLE_START
//   const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
// `;
//   const values = [
//     "https://images.https://images.unsplash.com/photo-1616924416730-5566217be0b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlY3ljbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=801&q=80",
//     "Papersider",
//     "Guilherme Gemballa , Jardim América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio Grande",
//     "Resíduos Papéis e papelão, Lampadas",
//   ];
//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Cadastro com sucesso");
//     console.log(this);
//   }
//   db.run(query, values, afterInsertData);
//3-CONSULTAR OS DADOS NA TABELA
//   db.all(`SELECT name FROM places`, function (err, rows) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Aqui estão seus registros: ");
//     console.log(rows);
//   });
//4-DELETAR UM DADO
//   db.run(`DELETE from places WHERE id = ?`, [2], function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Registro deletado com sucesso");
//   });
// });
