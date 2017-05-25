var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user){
	var User = user;
	var LocalStrategy = require('passport-local').Strategy;
	passport.use('local-signup', new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},
		function(req, email, password, done) {
			var generateHash = function(password) {
				return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
			};

			User.findOne({
				where: {
					email: email
				}
			}).then(function(user) {
				if (user) {
					return done(null, false, {
						message: 'This email is already taken'
					});
				} else {
					var userPassword = generateHash(password);
					var data = {
						email: email,
						password: userPassword,
						firstname: req.body.firstname,
						lastname: req.body.lastname
					};
					User.create(data).then(function(newUser, created) {
						if (!newUser) {
							return done(null, false);
						} else if (newUser) {
							return done(null, newUser);
						} else {
							console.log('We have a tear in the space-time continuum');
						}
					});
				}
			});
		}
	));
	//serialize
passport.serializeUser( (user, done) => {
  var sessionUser = { _id: user._id, email: user.email }
  done(null, sessionUser)
})

passport.deserializeUser( (sessionUser, done) => {
  // The sessionUser object is different from the user mongoose collection
  // it's actually req.session.passport.user and comes from the session collection
  done(null, sessionUser)
})


	// passport.serializeUser(function(user, done) {
	// 	done(null, {
	// 		_id: user._id,
	// 		email: user.email
	// 	});
	// });
	// passport.deserializeUser(function(id, done) {
	// 	User.findById(id).then(function(user) {
	// 		if (user) {
	// 			done(null, user.get());
	// 		} else {
	// 			done(user.errors, null);
	// 		}
	// 	})
	// });
	passport.use('local-signin', new LocalStrategy(
	{
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done) {
		var User = user;
		var isValidPassword = function(userpass, password) {
			return bCrypt.compareSync(password, userpass);
		}
		User.findOne({
			where: {
				email: email
			}
		}).then(function(user) {
			if (!user) {
				return done(null, false, {
					message: 'Email does not exist'
				});
			}
			var userinfo = user.get();
			return done(null, userinfo);
		}).catch(function(err) {
			console.log("Error: ", err);
			return done(null, false, {
				message: 'Something went wrong with your Signin'
			});
		});
	}));
}

	