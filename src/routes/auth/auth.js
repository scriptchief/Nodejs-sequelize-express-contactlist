const express = require('express');
const { signIn, signUp, signInForm, profile, logout } = require('../../controllers/auth/auth');
const passport = require('passport');
const { isNotLoggedIn, isLoggedIn } = require('../../lib/auth');
const router = express.Router();

//GET
router.get('/', isNotLoggedIn,signIn );
router.get('/signIn', isNotLoggedIn,signIn);
router.get('/signUp', isNotLoggedIn,signUp);
router.get('/profile', isLoggedIn,profile);
router.get('/logout', logout)


//POST
router.post('/signIn', signInForm);
router.post('/signUp', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signUp',
    failureFlash: true
}));


module.exports = router;