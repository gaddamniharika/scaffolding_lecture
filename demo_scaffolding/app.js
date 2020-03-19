let express = require ('express');
let app = express();
let bodyParser = require('body-parser');
const routes = require('./routes/route');
app.use(bodyParser.json());
app.use(routes);
app.listen('3000',()=>{console.log('listening on port 3000')});