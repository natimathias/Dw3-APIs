const express = require('express');
const app = express();
const port = 8086;

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
});

app.get('/endereco1', (req, res) => {
    fetch("https://")
})

app.get('/endereco', function(req, res){
    fetch("https://brasilapi.com.br/api/cep/v2/" + "87301-899")
        .then((response) => response.json())
        .then((endereco) => {
            res.send(`Endereo: ${endereco.street}`);
        })
        .catch(error => {
            console.log("Erro ao acessar o link");
            res.send("Ops, houve um erro.");
        });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`);
    
});