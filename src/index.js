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

app.use('/api/cryptosfavs',require('./routes/cryptos.routes'));
app.use('/api/nftsfavs',require('./routes/nfts.routes'));
app.use('/api/exchangesfavs',require('./routes/nfts.routes'));


app.listen(PORT,()=>{
    console.log('server listening on: ', PORT);
});

