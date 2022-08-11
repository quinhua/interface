const mysql = require('../../utils/util/query')

let getUserList = name => {
    let _sql = `SELECT * FROM quinhua.dbuser`;
    return mysql.query(_sql);
};

let getOneUser = value => {
    let _sql = `SELECT * FROM quinhua.dbuser WHERE username=?`;
    return mysql.query(_sql, value);
};

let getAddUser = value => {
    let _sql = `INSERT INTO quinhua.dbuser(username,password,date,uid) VALUES (?,?,?,?)`;
    return mysql.query(_sql, value);
};

let getDelUser = value => {
    let _sql = `DELETE FROM quinhua.dbuser WHERE id=?`;
    return mysql.query(_sql, value);
};

let getUpdateUser = value => {
    let _sql = `UPDATE  quinhua.dbuser SET username=?,PASSWORD=? WHERE id=?`;
    return mysql.query(_sql, value);
};

module.exports = {
    getUserList: getUserList,
    getOneUser: getOneUser,
    getAddUser: getAddUser,
    getDelUser: getDelUser,
    getUpdateUser: getUpdateUser
};
