// Getting just the needed methods from the module 'fs'
const { readFileSync, writeFileSync } = require('fs');


var first = readFileSync('./content/first.txt', 'utf-8')
var second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync('./content/result-sync.txt', `Here is the result: \n${first} \n${second}`)

