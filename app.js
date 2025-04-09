const express = require('express');
const app = express();
const port = 8086;

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
});


//Arrumar
app.get('/cnpj', (req, res) => {
    fetch("https://brasilapi.com.br/api/cnpj/v1/" + "19131243000197")
        .then((response) => response.json())
        .then((bairro) => {
            res.send(`Bairro: ${bairro}`);
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