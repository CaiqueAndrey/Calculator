const  express = require('express');
const bodyparser = require('body-parser');
const port  = 3000;

const app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use(require('./app'));

app.listen(port, ()=> console.log('Api rodando na porta 3000'));