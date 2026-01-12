const Listing = require("../model/listings");
const Review = require("../model/review.js");
const mongoose = require("mongoose");


module.exports.create_reviews = async (req, res) => {
    let { id } = req.params
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.Review);
    newReview.author = req.user._id;
    listing.Review.push(newReview);
    await listing.save();
    await newReview.save();

    req.flash("success", "Review submited!!")
    res.redirect(`/listings/${id}`)
};

module.exports.destroy_review = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { Review: new mongoose.Types.ObjectId(reviewId) } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("error", "delete successfully!!")
    res.redirect(`/listings/${id}`);
};