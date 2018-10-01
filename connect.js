const mysql = require('mysql');

function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'mysql642.umbler.com',
    port     : 41890,
    user     : 'laragroup',
    password : 'laraedemais',
    database : 'lara'
  });

  connection.query(sqlQry, function(error, results, fields){
    if(error)
      res.json(error);
    else
      res.json(results);
    connection.end();
    console.log('executou!');
  });
}

module.exports = {execSQLQuery};
