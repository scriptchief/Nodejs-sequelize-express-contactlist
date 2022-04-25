const passport = require('passport');

const signIn = (req, res) => {
    res.render('auth/signin');
}

const signUp = (req, res) => {
    res.render('auth/signUp');
}

const signInForm = (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signIn',
        failureFlash: true
    })(req, res, next)
}

const profile = (req, res) => {
    res.render('auth/profile');
}

const logout = (req, res) => {
    req.logOut();
    res.redirect('/signIn');
}

module.exports = {
    signIn,
    signUp,
    signInForm,
    profile,
    logout
};