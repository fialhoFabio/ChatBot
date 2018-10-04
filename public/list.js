const thead = document.querySelector('div#content table thead');
const tbody = document.querySelector('div#content table tbody');

function generateInput (value) {
  const td = document.createElement('td');
  const input = document.createElement('input');
  input.value = value;
  td.appendChild(input);
  return td;
}

function addResponseOnTable (response) {
  response.forEach(data => addLine(data));
}

async function loadData () {
  const res = await (await fetch('http://localhost:3000/funcionario/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })).json();
  addResponseOnTable(res);
}

function clearTable () {
  tbody.innerText = '';
}

async function removeData (id) {
  const res = await (await fetch('http://localhost:3000/funcionario/' + id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })).json();
  clearTable();
  loadData();
}

async function updateData (data) {
  const res = await (await fetch('http://localhost:3000/funcionario/' + data.func_id, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })).json();
  clearTable();
  loadData();
}

function generateRemoveButton (id) {
  const button = document.createElement('button');
  button.innerText = 'remover registro';
  button.addEventListener('click', () => removeData(id));
  return button;
}

function generateUpdateButton (tr) {
  const button = document.createElement('button');
  button.innerText = 'Update';
  button.addEventListener('click', () => {
    const coletion = tr.children;
    const func_id = coletion.item(1).firstChild.value;
    const func_nome = coletion.item(2).firstChild.value;
    const func_vaga = coletion.item(3).firstChild.value;
    updateData({func_id, func_nome, func_vaga});
  });
  return button;
}

function addLine (data) {
  const {func_id, func_nome, func_vaga} = data;
  const tr = document.createElement('tr');
  const funcId = generateInput(func_id);
  const funcNome = generateInput(func_nome);
  const funcVaga = generateInput(func_vaga);
  tr.appendChild(generateRemoveButton(func_id));
  tr.appendChild(funcId);
  tr.appendChild(funcNome);
  tr.appendChild(funcVaga);
  tr.appendChild(generateUpdateButton(tr));
  tbody.appendChild(tr);
}

loadData();
