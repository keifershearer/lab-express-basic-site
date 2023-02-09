const express = require('express')





const app = express()
app.set('view engine', 'hbs')
app.use(express.static(`${__dirname}/public`))




app.get('/', (request, response) => {
    response.render(`home`)
})
app.get('/about', (req, res) => {
    // console.log(req.query)
    res.render('about')
})
app.get('/works', (req, res) => {
    res.render('works')
})




app.listen(3000, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('https://localhost:3000')
})