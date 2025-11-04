const express = require('express')
const cors = require('cors')

const app = express()

var corOption = {
    origin: 'https://localhost:8081'
}

app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// route
const routerpaiement = require('./routes/paiement')
const routertarif = require('./routes/tarif')
const routerposte = require('./routes/poste')
// 
app.use('/roadsense/paiement', routerpaiement)
app.use('/roadsense/tarif', routertarif)
app.use('/roadsense/poste', routerposte)


// test api
app.get('/', (req, res) => {
    res.json({ message: 'hello from api' })
})

// port
// const PORT = process.env.PORT || 8080
const PORT = process.env.PORT || 8081

// server
app.listen(PORT, () => {
    console.log('server is running on port')
})