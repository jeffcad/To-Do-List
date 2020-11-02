const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + '/date.js')

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

const port = 3000

app.listen(port, () => console.log(`Express server listening on port ${port}.`))

const items = []
const workItems = []

app.get('/', (req, res) => {
    const listTitle = date.getDate()
    res.render('list', { listTitle, items })
})

app.post('/', (req, res) => {
    if (req.body.list === 'Work List') {
        workItems.push(req.body.newItem)
        res.redirect('/work')
    } else {
        items.push(req.body.newItem)
        res.redirect('/')
    }
})

app.get('/work', (req, res) => {
    res.render('list', { listTitle: 'Work List', items: workItems })
})

app.post('/work', (req, res) => {
    workItems.push(req.body.newItem)
    res.redirect('/work')
})

app.get('/about', (req, res) => {
    res.render('about')
})