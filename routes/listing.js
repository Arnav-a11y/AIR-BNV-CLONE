const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const listingController = require("../controllers/listings.js")
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage});


const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");



// all listings 
router.get("/", wrapAsync(listingController.index));

// new !  
router
    .route("/new")
    .get(isLoggedIn, listingController.new_form)      
.post( isLoggedIn, validateListing,upload.single("listing[image]"),wrapAsync(listingController.add_listings));


router
    .route("/:id")
    .get(wrapAsync(listingController.show_listings))
    .put(isLoggedIn, isOwner, validateListing, upload.single("listing[image]"), wrapAsync(listingController.update_listing))
    .delete(isLoggedIn, isOwner, listingController.delete_route)


// edit form 
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.edit_listing_form));

module.exports = router;