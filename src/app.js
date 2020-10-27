const express = require('express');
const app = express();
const cors = require('cors')
// Settings
app.use( express.urlencoded( { extended : false } ) );
app.use( express.json() );
app.use(cors())
// Routes
const routes = require('./routes/routes');


app.use( routes );


app.listen(3000, () => {
    console.log('http://localhost:3000');
});