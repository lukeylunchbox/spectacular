const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cup = require('./cup-example.json')

console.log(PORT)

app.use('/', (req, res) => {
    res.status(200).json(cup)
})

app.listen(3000, () => {
    console.log(`listening on ${PORT}`)
})



// const express = require('express');
// const bodyParser = require('body-parser')
// const catRouter = require('./cats/catRouter')

// const app = express();

// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//     res.redirect('/cats')
// })

// app.use('/cats', catRouter)

// app.listen(3000, () => {
//     console.log("Express server listening on port 3000 :D");
// });
