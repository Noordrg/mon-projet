const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
app.get('/about', (req, res) => {
    res.send('About us');
});
// Ajout d'une nouvelle route pour afficher un message personnalisé
app.get('/hello', (req, res) => {
    res.send('Hello, this is a new feature!');
});
