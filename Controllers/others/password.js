const config = require('../../utils/config')
const nodemailer = require("nodemailer");
// const shortid = require('shortid');
const svgCaptcha = require('svg-captcha')
let codeEmail = "";//邮箱code
let codeKey = "";//图形code

module.exports = {
    getYiMa: async (ctx, next) => {
        let password = ctx.request.body.password;
        if (password == config.mima.yima) {
            ctx.body = {
                code: 200,
                msg: "密码正确!"
            }
        } else {
            ctx.body = {
                code: 500,
                msg: "密码错误!"
            }
        }
    },
    setCode: async (ctx, next) => {
        let captcha = svgCaptcha.create({
            size: 4, // 验证码长度
            ignoreChars: "0oOiIl1", // 排除一些相似的字符
            noise: 6, // 干扰线条数量
            color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
        });
        codeKey = captcha.text.toLowerCase();
        ctx.body = captcha.data;
        setTimeout(() => { codeKey = "" }, config.token.vrifiationcode);
        next();
    },
    getCode: async (ctx, next) => {
        if (codeKey == "") {
            ctx.body = {
                code: 500,
                msg: "验证码已过期,请重新获取!"
            }
        } else {
            const code = ctx.request.body.code.toLowerCase();
            if (codeKey == code) {
                ctx.body = {
                    code: 200,
                    msg: "验证码正确"
                }
                next();
            } else {
                ctx.body = {
                    code: 500,
                    msg: "验证码错误!"
                };
            }
        }
    },
    setEmail: async (ctx, next) => {
        const email = ctx.request.body.email;
        //const code=shortid.generate();
        const code = Math.random().toString().slice(2, 6)
        let transporter = nodemailer.createTransport({
            host: "smtp.qq.com",
            port: 465,
            secure: true,
            auth: {
                user: config.email.user,
                pass: config.email.pass
            },
        });
        codeEmail = code;
        let mailobj = {
            from: `"${config.email.title}" <${config.email.user}>`,
            to: email,
            subject: "验证码",
            text: `您的验证码是:   ${code}   ,有效期为五分钟`,
            //html: "<p></p>",开启html格式
        }
        try {
            await transporter.sendMail(mailobj)
            ctx.body = {
                code: 200,
                message: '验证码发送成功,请前往QQ邮箱查看!',
            }
        } catch (e) {
            ctx.body = {
                code: 500,
                message: '验证码发送失败,请重新尝试!',
            }
        }
        setTimeout(() => { codeEmail = "" }, config.token.vrifiationcode);
        next()
    },
    getEmail: async (ctx, next) => {
        if (codeEmail == "") {
            ctx.body = {
                code: 500,
                msg: "验证码已过期,请重新获取!"
            }
        } else {
            const code = ctx.request.body.code;
            if (codeEmail == code) {
                ctx.body = {
                    code: 200,
                    msg: "验证码正确"
                }
                next();
            } else {
                ctx.body = {
                    code: 500,
                    msg: "验证码错误!"
                };
            }
        }
    },
}
