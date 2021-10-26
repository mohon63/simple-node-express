const { response } = require('express');
const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Wow i am excited to learning more nodemon moon');
});

const users = [
    { id: 1, name: 'Sabana', email: 'Sabana@gamil.com', phone: '0181212121' },
    { id: 2, name: 'Sabanoor', email: 'Sabanoor@gamil.com', phone: '0171212121' },
    { id: 3, name: 'Sonia', email: 'Sonia@gamil.com', phone: '0191212121' },
    { id: 4, name: 'Sosurita', email: 'Sosurita@gamil.com', phone: '0161212121' },
    { id: 5, name: 'Sultana', email: 'Sultana@gamil.com', phone: '0151212121' },
    { id: 6, name: 'Selina', email: 'Selina@gamil.com', phone: '0131212121' },
    { id: 7, name: 'Sepali', email: 'Sepali@gamil.com', phone: '0141212121' },
]

app.get('/users', (req, res) => {
    const search = (req.query.search);
    // use query peramitar
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users);
    }
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// daynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})
app.get('/fruits', (req, res) => {
    res.send('This is Fruits');
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yammi Yemmi test tok fazi');
})

app.listen(port, () => {
    console.log('Listen to port ', port);
})