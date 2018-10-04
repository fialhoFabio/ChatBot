const connect = require('../../connect');

const execSQLQuery = connect.execSQLQuery;

function cb (req, res) {
  const {
    func_id,
    func_nome,
    func_vaga,
  } = req.body;
  const values = (
    (func_nome ? 'func_nome = \'' + func_nome + '\',' : null) +
    (func_vaga ? 'func_vaga = ' + func_vaga + ' ' : null)
  );
  execSQLQuery('UPDATE funcionario SET ' + values + 'WHERE func_id = ' + func_id, res);
}

module.exports = {cb};
