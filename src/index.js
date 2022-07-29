const express = require('express');
const app = express();

require('./database');

app.use(express.json());
app.use('/api',require('./routes/index'));

app.listen(3000);

console.log('server listening on: ', 3000);
