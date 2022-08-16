const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/database');

const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

const env = dotenv.config()
dotenvExpand.expand(env)

const app = express();
dbConnection();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/auth.routes'));
app.use('/api/cryptofavs',require('./routes/cryptos.routes'));

app.listen(PORT,()=>{
    console.log('server listening on: ', PORT);
});

