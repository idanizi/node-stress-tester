const fetch = require('node-fetch')
const pLimit = require('promise-limit')
const config = require('../config')
const pm2_io = require('@pm2/io')

const req_sec = pm2_io.meter({
    name: 'req/sec',
    type: 'meter'
})

const res_seq = pm2_io.meter({
    name: 'res/sec',
    type: 'meter'
})

const resolved_promises_count = pm2_io.counter({
    name: "resolved",
    type: "counter"
})

const limit = pLimit(config.promise_count)

function send() {
    return limit(() => {
        req_sec.mark()
        return fetch(config.url)
    })
        // .then(console.log)
        .then(() => res_seq.mark())
        .catch(console.error)
        .finally(() => resolved_promises_count.inc())
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function main() {
    console.log('[main]', 'start')
    const start_time = Date.now()

    while (Date.now() - start_time < 60e3) {
        await sleep(10)
        send()
    }
}

main().catch(console.error)

process.on('exit', () => console.log('\nbye bye! :)'))