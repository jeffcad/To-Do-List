const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3000

app.listen(port, () => console.log(`Express server listening on port ${port}.`))

app.get('/', (req, res) => {
    res.send('Hello, Mr. Thompson.')
})