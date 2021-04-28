const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./src/database/database.db");
db.serialize();

//CRIAR UMA TABELA
db.run(`
    CREATE TABLE IF NOT EXISTS places(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );
`);

//INSERIR DADOS NA TOKEN_VARIABLE_START
const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items

    ) VALUES (?,?,?,?,?,?,?);
`;

db.run(query, []);
