require('./db/connect')
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.LOCAL_PORT || 8080
const invoices = require('./routes/invoices')

const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.static('./src'))
app.use(express.json())

// routes
app.use('/api/v1/invoices', invoices)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()