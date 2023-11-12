const express = require('express');
const app = express();
const port = 3000; // You can change the port if needed

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { cardNumber, cvv, expiry } = req.body;
    console.log('Card Number:', cardNumber);
    console.log('CVV:', cvv);
    console.log('Expiry:', expiry);
    res.send('Login Successful');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
