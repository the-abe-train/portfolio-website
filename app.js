const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'routes')));

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})