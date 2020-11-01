const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs')

const port = 3000

app.listen(port, () => console.log(`Express server listening on port ${port}.`))

app.get('/', (req, res) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today = days[(new Date()).getDay()]
    res.render('list', { today })
})