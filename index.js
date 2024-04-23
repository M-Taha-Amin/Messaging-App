const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routesHandler = require('./routes/route');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path');

app.use(expressLayouts);
app.use(bodyParser());
app.use(express.static(path.join(process.cwd(), 'public')));
app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');
app.use(routesHandler);

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}...`));
