const Listing = require("./model/listings");
const Review  = require("./model/review.js");
const expressError = require("./utils/expressError");
const {reviewSchema  } = require("./schema.js");
const { listingSchema  } = require("./schema.js");

module.exports.validateListing = (req, res, next) => {
    const result = listingSchema.validate(req.body);
    if (result.error) {
        const msg = result.error.details[0].message;
        throw new expressError(400, msg);
    }
        next();
};


module.exports. validateReview = (req, res, next) => {
    const result = reviewSchema.validate(req.body);
    if (result.error) {
        const msg = result.error.details[0].message;
        throw new expressError(400, msg);
    }
 next();
};



module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        // console.log(req.path + " " + req.originalUrl)
        req.session.redirectUrl  = req.originalUrl;
        req.flash("error"," please loggedIn first");
        return res.redirect("/login")
    }
    next();
} 

module.exports.savedUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner  = async(req,res,next)=>{
    let{id} = req.params;
    let listing  = await Listing.findById(id)
    if(!listing.owner.equals(res.locals.currUser._id)){
     req.flash("error","you are not allowed to access this listing")
      res.redirect(`listings/${id}`);
    }
    next();
};

module.exports.isReviewAuthor  = async(req,res,next)=>{
     let {id,reviewId} =  req.params;
    let review  = await Review.findById(reviewId)
    if(!review.author.equals(res.locals.currUser._id)){
     req.flash("error","you are not allowed to access this review")
      return res.redirect(`listings/${id}`);
    }
    next();
};