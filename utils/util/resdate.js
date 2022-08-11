const moment = require('moment')

moment.suppressDeprecationWarnings = true;
const resdate = (date)=> {
    return moment(date).format('YYYY-MM-DD HH:mm:ss')
}

const differenceDay=(date,now)=>{
    return moment(now).diff(moment(date), 'days')
}

module.exports = {
    resdate,
    differenceDay
}