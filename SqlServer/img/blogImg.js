const mysql = require('../../utils/util/query')

let getBlogImgList = name => {
    let _sql = `SELECT * FROM quinhua.blogimg`;
    return mysql.query(_sql);
};

let getAddBlogImg = value => {
    let _sql = `INSERT INTO quinhua.blogimg(src,text,date,type) VALUES (?,?,?,?)`;
    return mysql.query(_sql, value);
};

let getTypeBlogImg = value => {
    let _sql = `SELECT src FROM quinhua.blogimg WHERE TYPE=?;`;
    return mysql.query(_sql, value);
};

let getLimitBlogList = value => {   
    let _sql = `SELECT * FROM quinhua.blogimg LIMIT ?,15;`;
    return mysql.query(_sql, value);
}

module.exports = {
    getBlogImgList: getBlogImgList,
    getAddBlogImg:getAddBlogImg,
    getTypeBlogImg:getTypeBlogImg,
    getLimitBlogList:getLimitBlogList
};
