/**
 * Created by zhugod on 2016-12-06.
 */
module.exports = {
    checkLogin:function checkLogin(req,res,next){
        if(!req.session.user){
            req.flash('error','未登录');
            return res.redirect('/signin');
        }
        next();
    },
    checkNotLogin:function checkNotLogin(req,res,next){
        if(req.session.user){
            req.flash('error','已登陆');
            return res.redirect('back');
        }
        next();
    }
}