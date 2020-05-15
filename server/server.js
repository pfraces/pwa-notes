const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router.js');

const app = express();
const server = http.Server(app);
const PORT = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', router);

server.listen(PORT, function() {
  console.log('Server listening on port', PORT);
});
