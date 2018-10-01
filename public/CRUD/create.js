const connect = require('../../connect');

const execSQLQuery = connect.execSQLQuery;

function cb (req, res) {
  const {
    nome,
    cod,
    cpf,
    email,
    celular,
    pais,
    endereco,
    cep,
    func,
  } = req.body;
  const values = (
    (nome ? "'" + nome + "'" : null) + ',' +
    (cpf ? "'" + cpf + "'" : null) + ',' +
    (celular ? "'" + celular + "'" : null) + ',' +
    (pais ? "'" + pais + "'" : null) + ',' +
    (endereco ? "'" + endereco + "'" : null) + ',' +
    (cep ? "'" + cep + "'" : null) + ',' +
    (cod ? cod : null) + ',' +
    (email ? "'" + email + "'" : null) + ',' +
    (func ? "'" + func + "'" : null)
  );
  console.log(values);
  execSQLQuery(
    'INSERT INTO funcionario (' +
    'func_nome,' +
    'func_cpf,' +
    'func_tele,' +
    'func_pais,' +
    'func_ende,' +
    'func_cep,' +
    'func_vaga,' +
    'func_email,' +
    'func_func' +
    ' ) VALUES (' + values + ');', res);
}

module.exports = {cb};
