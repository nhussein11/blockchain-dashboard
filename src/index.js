const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/database');

require('dotenv').config();

const app = express();
dbConnection();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/auth',require('./routes/auth.routes'));

app.listen(PORT,()=>{
    console.log('server listening on: ', PORT);
});

