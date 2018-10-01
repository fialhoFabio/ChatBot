const connect = require('../../connect');

const execSQLQuery = connect.execSQLQuery;

function cb (req, res) {
  let filter = '';
  if (req.params.id) filter = ' WHERE ID = ' + parseInt(req.params.id);
  execSQLQuery.query('DELETE FROM funcionarios' + filter, res);
}

module.exports = {cb};
