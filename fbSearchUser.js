var FacebookTokenStrategy = require('passport-facebook-token');
var passport = require('passport');

passport.use(new FacebookTokenStrategy({
    clientID: "260032061103299",
    clientSecret: "0606156121891946ec2b376dfba137dc"
  }, function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({facebookId: profile.id}, function (error, user) {
        console.log(error);
      return done(error, user);
    });
  }
));