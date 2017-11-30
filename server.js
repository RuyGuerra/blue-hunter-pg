const config = require('./server/config');
const express = require('express');

const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./server/routes/index');
const users = require('./server/routes/users');
const books = require('./server/routes/books');

const app = express();

app.use(favicon(path.join(__dirname, 'dist/favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/user', users);
app.use('/api/book', books);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.set('port', process.env.PORT || config.app.port);

app.listen(app.get('port'));

console.log('Listening on port: ' + app.get('port'));

module.exports = app;
