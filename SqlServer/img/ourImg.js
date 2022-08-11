const mysql = require('../../utils/util/query')

let getOurImgList = name => {
    let _sql = `SELECT * FROM quinhua.laopo`;
    return mysql.query(_sql);
};

let getAddOurImg = value => {
    let _sql = `INSERT INTO quinhua.laopo(src,text,date) VALUES (?,?,?)`;
    return mysql.query(_sql, value);
};
let getLimitBlogList= value => {
    let _sql = `SELECT * FROM quinhua.laopo LIMIT ?,15;`;
    return mysql.query(_sql, value);
};

module.exports = {
    getOurImgList: getOurImgList,
    getAddOurImg: getAddOurImg,
    getLimitBlogList:getLimitBlogList
};
