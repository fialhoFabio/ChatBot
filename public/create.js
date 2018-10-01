const form = document.getElementById('createForm');

async function requestCreate (e) {
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
  } = e.target.elements;
  const res = await( await fetch('http://localhost:3000/funcionario/', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nome: nome.value,
      cod: cod.value,
      cpf: cpf.value,
      email: email.value,
      celular: celular.value,
      pais: pais.value,
      endereco: endereco.value,
      cep: cep.value,
      func: func.value,
    }),
  })
  ).json();
  const msm = (res.affectedRows > 0) && 'Creado com sucesso!';
  alert(res.message + "\n" + msm);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  requestCreate(e);
});
