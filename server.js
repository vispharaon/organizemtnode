var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,    
    role = require('./api/models/role');

    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());

var routes = require('./api/routes/organizemtRoutes');
routes(app);

app.listen(port);

console.log('organize mt RESTful API server started on: ' + port);
