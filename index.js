const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('wow, i am learning node')
});

const users= [
    {
        id: 01,
        name: 'savvana',
        email: 'savana123@gamil.com'
    },
    {
        id: 02,
        name: 'rafiya',
        email: 'rafiya123@gamil.com'
    },
    {
        id: 03,
        name: 'soniya',
        email: 'soniya123@gamil.com'
    },
    {
        id: 00,
        name: 'mithila',
        email: 'mithila123@gamil.com'
    }
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    //use quary parameter
    if (search) {
        const searchResult = users.fiter(user => user.name.toLocalLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
    
});
//app.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post',req.body);
    // res.send('post inside')
    res.json(newUser);
})

app.get('/users', (req, res) => {
    res.send(users)
});
//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u=>u.id ==id);
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana'])
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok misty aaamm')

})


app.listen(port,()=> {
    console.log('listing to port', port);
})