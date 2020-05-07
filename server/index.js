const express = require('express')
const config = require('../config')
const morgan = require('morgan')
const pm2_io = require('@pm2/io')
const app = express()

app.use(morgan('common'))

const req_sec = pm2_io.meter({
    name: "req/sec",
    type: 'meter',
})

app.get('/api/ping', (req, res) => {
    req_sec.mark()
    res.send('pong!')
})

app.listen(config.port, () => {
    console.log(`server listening on port ${config.port}`)
})