const passport = require('passport');
const LocalStrategy = require('passport-local');
const helpears = require('./helpers');
const {user} = require('../../models');

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async( req, username, password, done) => {
    const { fullname } = req.body;

    password = await helpears.encryptPassword(password);

    const userss = await user.create({number: fullname, mail: username, password: password});

    return done(null, userss.dataValues);

}))

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done) => {

    const row = await user.findAll({
        where: {
            mail: username
        }
    })

    if(row.length > 0) {
        const userss = row[0].dataValues;
        const validPassword = await helpears.matchPassword(password, userss.password);

        if(validPassword) {
            done(null, userss, req.flash('success','Welcome ' + userss.number));
        }else {
            done(null, false, req.flash('error', 'The Username o Password Incorrect'));
        }
    }else {
        return done(null, false, req.flash('error', 'The Username o Password Incorrect'));
    }

}))

passport.serializeUser((userss, done) => {
    done(null, userss.id);
});

passport.deserializeUser(async (id, done) => {
    const filas = await user.findAll({
        where: {
            id: id
        }
    });
    done(null, filas[0].dataValues);
})
