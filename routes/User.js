const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { savedUrl } = require("../middleware");
const userController = require("../controllers/users");


router
    .route("/signUp")
    .get((req, res) => { res.render("User/signUp.ejs"); })
    .post(wrapAsync(userController.signUp_user));


router
    .route("/login")
    .get((req, res) => {
        res.render("User/login.ejs")
    })
    .post(savedUrl,
        passport.authenticate("local", {
            failureRedirect: "/login", failureFlash: true
        }), userController.login_user
    );

// logout user 

router.get("/logout", userController.logout_user)

module.exports = router;