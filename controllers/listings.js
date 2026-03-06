const Listing = require("../model/listings");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    let listings = await Listing.find({});
    res.render("listings/all_listings", { listings });
};

module.exports.new_form = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.show_listings = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "Review", populate: { path: "author" } })
        .populate("owner");
    if (!listing) {
        req.flash("error", "listing is doesn't exit");
        return res.redirect("/listings");
    }
    res.render("listings/show_listing", { listing });
};


module.exports.add_listings = async (req, res) => {
    const coordinates = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    })
        .send();
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
    }
    newListing.geometry = coordinates.body.features[0].geometry;
    const savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "new listing created successfully!!");
    res.redirect("/listings")
};


module.exports.edit_listing_form = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "listing is doesn't exit");
        res.redirect("/listings");
    };
    const originalUrl = listing.image.url;
    originalUrl.replace("/upload", "/upload/h_100,w_250/e_blur:300/");
    res.render("listings/edit", { listing, originalUrl });
};

module.exports.update_listing = async (req, res) => {
    let { id } = req.params;
    let update_listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });
    if (req.file) {
        update_listing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
        await update_listing.save();
    }
    req.flash("success", "listing update successfully!! ")
    res.redirect(`/listings/${id}`)
};

module.exports.delete_route = async (req, res) => {
    let { id } = req.params;
    const delId = await Listing.findByIdAndDelete(id);
    req.flash("error", "delete listing successfully")
    console.log(delId);
    res.redirect("/listings")
};