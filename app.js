require('dotenv').config();
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const express = require('express');
const bodyParser = require('body-parser');

const retrieve = require('./public/CRUD/retrieve');
const create = require('./public/CRUD/create');
const exclude = require('./public/CRUD/delete');
const update = require('./public/CRUD/update');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./public'));

const assistant = new AssistantV1({
  username: 'fd666e75-5878-4476-9576-fc181d973efd',
  password: 'oxOwaubfRQBg',
  url: 'https://gateway.watsonplatform.net/assistant/api',
  version: '2018-02-16',
});

app.post('/conversation/', (req, res) => {
  const { text, context = {} } = req.body;

  const params = {
    input: { text },
    workspace_id: 'd99b2809-2b29-4d42-9383-c94dde4543b0',
    context,
  };

  assistant.message(params, (err, response) => {
    if (err) res.status(500).json(err);

    res.json(response);
  });
});

app.get('/funcionario/:id?', retrieve.cb);

app.put('/funcionario/', create.cb);

app.delete('/funcionario/:id', exclude.cb);

app.patch('/funcionario/:id', update.cb);

app.listen(port, () => console.log(`Running on port ${port}`));
