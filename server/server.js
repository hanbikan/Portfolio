const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use('/api', require('./routes/index'));

app.listen(port, ()=>{
  console.log(`Listening on ${port}`);
});
