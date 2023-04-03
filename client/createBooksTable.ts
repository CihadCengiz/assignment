const mysql = require('mysql');

//Loop to create books table
for (let i = 0; i < 100; i++) {
  let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456_abCD',
    database: 'ci4',
  });

  con.connect(function (err) {
    if (err) throw err;
    con.query( //Query to create books table
      `insert into books (title,author,publication_year,description) values ("Book${
        i + 1
      }","Author${i + 1}",${2001 + i},"Description${i + 1}")`,
      function (err: Error) {
        if (err) throw err;
      }
    );
  });
}

console.log('Done creating books table');
