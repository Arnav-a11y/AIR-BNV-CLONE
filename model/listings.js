const mongoose = require("mongoose");
const { Schema } = mongoose;
const Review  = require("./review");


const listingSchema = new Schema({
    title: String,
    description: String,
    image: {
        url:String,
        filname:String
        },
        
    
    price: Number,
    location: String,
    country: String,
    Review:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    owner:   {
            type:Schema.Types.ObjectId,
            ref:"User"
        },  
    geometry: {
      type: {
          type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
         required: true
    },
       coordinates: {
          type: [Number],
          required: true
    }
  },
});

// middleware for delete listing so it can delete reviews also 

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
     await Review.deleteMany({_id:{$in:listing.Review}})
    }
})

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;