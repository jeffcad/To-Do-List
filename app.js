const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

const port = 3000

app.listen(port, () => console.log(`Express server listening on port ${port}.`))

let items = ['test 1', 'test 2', 'test 3']

app.get('/', (req, res) => {
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    const today = (new Date()).toLocaleDateString('en-CA', options)
    res.render('list', { today, items })
})

app.post('/', (req, res) => {
    items.push(req.body.newItem)
    res.redirect('/')
})