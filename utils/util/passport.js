const   JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const config=require('../config')
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.token.jwtSecret;

module.exports = passport=>{
    passport.use(new JwtStrategy(opts, (jwt_payload, done)=> {
    //    console.log(jwt_payload)
       User.findById(jwt_payload.rule.id).then(user=>{
           if(user){    //token存在,返回user数据
            return done(null,user);
           }
           return done(null,false)
       }).catch(err => console.log(err))
    }));
}