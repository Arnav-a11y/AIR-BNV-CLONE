if(process.env.NODE_ENV!== "production"){
require("dotenv").config()
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodoverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore  = require("connect-mongo").default;
const flash = require("connect-flash");
const expressError = require("./utils/expressError");
const passport = require("passport");
const LocalStrategy = require("passport-local");


const User = require("./model/user.js");


const userRoutes = require("./routes/User.js");
const listingsRoute = require("./routes/listing.js");
const reviewsRoute = require("./routes/reviews.js");

 const Database_url = process.env.DB_URL;

// db connection 
main().then(() => {
    console.log("databases connected...")
}).catch((err) => {
    console.log(err + "something went wrong in databases connection");
})

async function main() {
    await mongoose.connect(Database_url);
}

// pre middleware 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));
app.engine("ejs", ejsMate);

const store = MongoStore.create({
    mongoUrl: Database_url,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600, 
});

store.on("error",(err)=>{
    console.log("something went wrong in mongos session", err)
});

const sessionOption = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};


app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})



// listing route
app.use("/listings", listingsRoute);

// review route
app.use("/listings/:id/reviews", reviewsRoute);

// user route 
app.use("/", userRoutes);


// middlewares ... (Error Handling)

// 404 Route handler (Last non-error middleware)
app.use((req, res, next) => {
    next(new expressError(404, "Page not found"))
})

// Custom Error handler
app.use((err, req, res, next) => {
    let { status = 500, message = "something went wrong" } = err;
    res.status(status).render("error.ejs", { status, message })
})


app.listen(3000, () => {
    console.log("sever is started....")
})