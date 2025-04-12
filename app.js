const express = require('express');
const app = express();
const port = 8086;

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
});

app.get('/cep', (req, res) => {
    fetch("https://brasilapi.com.br/api/cep/v2/" + "89010025")
        .then((response) => response.json())
        .then((endereco) => {
            res.write(`Endereço: ${endereco.street}\n`);
            res.write(`Cidade: ${endereco.city}\n`);
            res.write(`Estado: ${endereco.state}\n`);
            res.write(`Bairro: ${endereco.neighborhood}`);
            res.end();
        })
        .catch(error => {
            console.log("Erro ao acessar o link: " + error);
            res.send("Ops, houve um erro.")
        });
});

app.get('/isbn', (req, res) => {
    fetch("https://brasilapi.com.br/api/isbn/v1/" + "9788545702870")
        .then((response) => response.json())
        .then((autores) => {
            res.write(`Autores: ${autores.authors}\n`);
            res.write(`Ano: ${autores.year}\n`);
            res.write(`local: ${autores.location}`);
            res.end()
        })
        .catch(error => {
            console.log("Erro ao acessar o link");
            res.send("Ops, houve um erro.")
        });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`);

});