const express = require('express');
const app = express();
const bodyParser = require("body-parser")

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require("./src/routes/route.js")(app)

app.listen(3000, () => {
  console.log('Server started on port 3000')
});

module.exports = app