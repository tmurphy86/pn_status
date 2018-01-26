require('dotenv-safe').load();
const path = require('path')
const bodyParser = require('body-parser');
const session = require('express-session')
const passport = require('passport');
const express = require('express');


const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT);

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.use(express.static("frontend/build"));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});
