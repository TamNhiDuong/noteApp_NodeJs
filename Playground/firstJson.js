const fs = require('fs')

//fs.writeFileSync('firstJson.json', '')

//load
const dataBuffer = fs.readFileSync('firstJson.json')
const dataString = dataBuffer.toString()
const dataObject = JSON.parse(dataString)

//change data
dataObject.name = 'Nhi'
dataObject.age = 24
const stringifyData = JSON.stringify(dataObject)
console.log(stringifyData)

fs.writeFileSync('firstJson.json', stringifyData)
 