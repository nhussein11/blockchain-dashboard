const express = require('express');

const app = express();
const cors = require('cors');

require('./database');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/auth',require('./routes/index'));

app.listen(PORT,()=>{
    console.log('server listening on: ', 3000);
});

