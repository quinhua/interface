const mysql = require('../../utils/util/query')

let getManyOne = value => {
    let _sql = `SELECT text FROM quinhua.many WHERE name=? `;
    return mysql.query(_sql, value);
};
let getUpManyOne = value => {
    let _sql = `UPDATE  quinhua.many SET text=? WHERE name=? `;
    return mysql.query(_sql, value);
};

module.exports = {
    getManyOne:getManyOne,
    getUpManyOne:getUpManyOne
};
