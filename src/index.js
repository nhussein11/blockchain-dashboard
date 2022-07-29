const express = require('express');

const app = express();
require('./database')

app.use(require('./routes/index'))
app.listen(3000);

console.log('server listening on: ', 3000);
