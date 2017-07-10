const express = require('express')
const app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.post('/post/data', function(req, res) {
    console.log('receiving data...');
    console.log('body is ',req.body);
    res.send(req.body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})