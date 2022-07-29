const express = require('express');
const app = express();
const cors = require('cors');

require('./database');

app.use(cors());
app.use(express.json());
app.use('/api/auth',require('./routes/index'));

app.listen(3000);

console.log('server listening on: ', 3000);
