

app.get('/funcionario/:id?', retrieve.cb);

app.get('/funcionario/', create.cb);

app.delete('/funcionario/:id', exclude.cb);

app.patch('/funcionario/:id', update.cb);
