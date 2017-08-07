'use strict';

var db = require('../connection');

var role = {
    getAllRoles: function(callback) {
        return db.query("Select * From role",callback);
    },
    
    getRoleById:function(id, callback) { 
        return db.query("Select * From role Where id=?",[id],callback);
    },
    
    addRole: function(role, callback) {
        return db.query("Insert Into role Values(?, ?, ?, ?)", [role.username, role.password, role.fullName, role.role_id], callback);
    },
    
    deleteRole: function(id, callback){
        return db.query("Delete From role Where id = ?", [id], callback);
    },
    
    updateRole: function(id, role, callback){
        return db.query("Update role Set username = ?, password = ?, fullName = ?, role_id = ? Where id = ?", 
            [role.username, role.password, role.fullName, role.role_id, id], callback);
    }
};

module.exports = role;