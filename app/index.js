const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = process.env.WEB_PORT || 8980;



app.get('/', async (req, res) =>{
    res.json({ status: 'Server is ready to accept requests'});
});







//import required routes
require('./routes/login.routes.js')(app);


//start listening on defined port
app.listen(port, () => {
    console.log('Server listening on port ', port);
  });

