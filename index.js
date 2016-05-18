var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
  response.send('Working')
})

app.listen(app.get('port'), function() {
  console.log('node is running on port 5000...')
})
