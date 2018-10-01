const content = document.getElementById('content');

async function loadData () {
  const res = await (await fetch('http://localhost:3000/funcionario/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
  })).json();
  console.log(res);
}

loadData();
