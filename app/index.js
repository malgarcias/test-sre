const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = process.env.PORT || 8989;

//import required routes
require('./app/routes/login.routes.js')(app);

app.get('/', async (req, res) =>{
    res.json({ status: 'Server is ready to accept requests'});
});










//start listening on defined port
app.listen(port, () => {
    console.log('Server listening on port ', port);
  });

