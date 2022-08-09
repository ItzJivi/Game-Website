const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

//views
app.set('view engine', 'ejs');
//static files
app.use(express.static('public'));

app.get('/login', (req, res) => {
    res.render("login")
});

app.get('/', (req, res) => {
    res.render("index")
});

//about
app.get('/about', (req, res) => {
    res.render("about")
});

//contact
app.get('/contact', (req, res) => {
    res.render("contact")
});

//jobs
app.get('/jobs', (req, res) => {
    res.render("jobs")
});

app.get('/login', (req, res) => {
    res.render("login")
});

app.get('/signup', (req, res) => {
    res.render("signup")
});

app.get('/searchmenu', (req, res) => {
    res.render("searchmenu")
})

app.get('/searchbar', (req, res) => {
    res.render("searchbar")
})


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('login', (data) => {
        console.log(data);
    });
});

var lis = server.listen(8000)
console.log("Running website on port "+lis.address().port)