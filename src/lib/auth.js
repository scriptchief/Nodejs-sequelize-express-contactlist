
module.exports = {

    isLoggedIn(req, res, next) {
        if(req.isAuthenticated()) {
            next()
        }else {
            res.redirect('/signIn');
        }
    },

    isNotLoggedIn(req, res, next) {
        if(!req.isAuthenticated()) {
            next();
        }else {
            res.redirect('/profile');
        }

    }

}