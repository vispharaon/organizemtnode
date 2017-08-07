'use strict';

module.exports = function(app) {
    var role = require('./api/controllers/roleController')

    //role routes
    app.route('/role')
        .get(role.listAllRoles)
        .post(role.createRole);
    
    app.route('/role/:roleId')
        .get(role.readRole)
        .put(role.updateRole)
        .delete(role.deleteRole);
};