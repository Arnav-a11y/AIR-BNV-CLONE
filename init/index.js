const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../model/listings");




main().then(() => {
    console.log("databases connected...")
}).catch((err) => {
    console.log(err + "something went wrong in databases connection");
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/air_bnv")
}

const initDb = async () => {
    await Listing.deleteMany({});
    initData.data  = initData.data.map((obj)=>({
        ...obj,
        owner:"693e8bfe767ba0c65d84e459"
    }))
    await Listing.insertMany(initData.data);
    console.log("the data was initizilise succussfully..")
};

initDb();