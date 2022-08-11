module.exports = {
    mysql: {//数据库配置
        host: "42.192.152.184",//主机名
        user: "quinhua",//用户名
        password: "QuinHua!132",//密码
        database: "quinhua", //数据库名字
    },
    token: {//token和session配置
        headerToken: "Bearer",
        jwtSecret: "secret",
        saltTimes: 5,
        jwtExpiresTime: 72 * 3600,//token过期时间
        vrifiationcode: 1000 * 60 * 5,//session过期时间
    },
    mima: {//密码
        yima: 211225,//密码
    },
    date: {//时间
        togetherDate: "2021-12-25",//在一起的时间
        kaoyan: "2022-12-26",//考研时间
    },
    email: {//邮箱配置
        user: "2867463524@qq.com",//发送人
        pass: "btnwkyzjwjncdfgg",//授权码
        title: "来自 林扬生",//标题
    },
    yi: {
        yiyan: "https://v1.hitokoto.cn",//一言网
        ip: "https://api.vvhan.com/api/visitor.info",//ip
    }

}



