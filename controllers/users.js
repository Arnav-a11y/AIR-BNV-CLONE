const User = require("../model/user");



module.exports.signUp_user = async (req, res) => {
    try {
        let { email, username, password } = req.body;
        const newUser = new User({ email, username });
        const registredUser = await User.register(newUser, password);
        req.login(registredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "user registred successfully!!")
            res.redirect("/listings")
        });

    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/listings")
    }
};

module.exports.login_user = async (req, res) => {
    let { username } = req.body;
    req.flash("success", "Welcome " + username);
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl)
};


module.exports.logout_user = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        } req.flash("success", "Logout Successfully !! ");
        res.redirect("/listings")
    })
};