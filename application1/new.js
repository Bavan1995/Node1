const express = require('express')
const app = express()
var jsonData = require('./name.json')



app.get('/', (req, res) => res.send('Hello World!'))
app.get('/tech', (req, res) => res.send('Tech World!'))
app.get('/name1', (req, res) => res.send(jsonData.name1))
app.get('/obj', (req, res) => res.send(obj))



var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text); 



app.listen(3011, () => console.log('Example app listening on port 3011!'))

