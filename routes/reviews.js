const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");




// create reviews 

router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.create_reviews));

// delete review 

router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroy_review));

module.exports = router;