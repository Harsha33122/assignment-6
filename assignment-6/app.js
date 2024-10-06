const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/login', (req, res) => {
    res.render('login'); 
});


app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.get('/appointment', (req, res) => {
    res.render('appointment');
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(5000, () => {
    console.log('Server is running @ http://localhost:5000');
});