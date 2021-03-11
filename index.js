const express = require('express')
var cors = require('cors')
const fetch = require('node-fetch');
const port = 3000
const app = express()

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is a get request')
})

app.get('/Deezer/search/:query', (req, res) => {
    const query = req.params.query;
    console.log(query);
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "GaYYNYwa8Mmshy6Kcq6usXTbjmjPp1JEfQujsn4Jy01PI4C442",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then(res => res.json())
    .then(response => {
        res.status(200).send(response);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send(err);
    });
});

app.get('/:name', (req, res) => {
    res.send(`Hola ${req.params.name}`);
})



app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
