const fs = require('fs')

//fs.writeFileSync('firstJson.json', '')

//load
const dataBuffer = fs.readFileSync('firstJson.json')
console.log('dataBuffer ', dataBuffer);
const dataString = dataBuffer.toString()
console.log('data string ', dataString);
const dataObject = JSON.parse(dataString)
console.log('parseJSON ', dataObject);

//change data
dataObject.name = 'Nhi'
dataObject.age = 24
const stringifyData = JSON.stringify(dataObject)
console.log('stringify data ', stringifyData)
//Save
fs.writeFileSync('firstJson.json', stringifyData)
 