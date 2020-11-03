const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const date = require(__dirname + '/date.js')

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/todolistDB',
    { useNewUrlParser: true })

const itemsSchema = { name: String }
const Item = new mongoose.model('Item', itemsSchema)

//Create default items for database
const item1 = new Item({ name: 'Welcome to the To-Do List app' })
const item2 = new Item({ name: 'Click the + button to add a new item' })
const item3 = new Item({ name: '<-- Click the checkbox to delete an item' })

const defaultItems = [item1, item2, item3]
Item.insertMany(defaultItems, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Default items added to DB!')
    }
})

const port = 3000

app.listen(port, () => console.log(`Express server listening on port ${port}.`))

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