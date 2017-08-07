'use strict';

var roleModel = require('./api/models/role');

exports.listAllRoles = function(request, response){
    roleModel.find({}, function(err, role){
        if(err)
            response.send(err);
        response.json(role);
    });
};