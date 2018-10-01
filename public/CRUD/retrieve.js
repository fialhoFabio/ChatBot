const connect = require('../../connect');

const execSQLQuery = connect.execSQLQuery;

function cb (req, res) {
  let filter = '';
  if (req.params.id) filter = ' WHERE func_id = ' + parseInt(req.params.id);
  execSQLQuery('SELECT * FROM funcionario' + filter, res);
}

module.exports = {cb};
