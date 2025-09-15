const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req,res) => {
    let nome = req.body.primeiroNome;
    let segundoNome = req.body.segundoNome;
    let email = req.body.email;
    console.log(nome, segundoNome, email);

})

app.listen(3000, () => {
    console.log('servidor em funcionamento')
})