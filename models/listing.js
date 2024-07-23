const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type :String ,
        required:true
    },
    description : String ,
    image: {
        type : String,
             default: "https://pixabay.com/photos/bedroom-hotel-room-bed-bed-sheets-1285156/",
            set : (v) =>
             v === ""
             ? "https://pixabay.com/photos/bedroom-hotel-room-bed-bed-sheets-1285156/"
              : v,
        },
   
    price : Number ,
    location : String ,
    country : String ,
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review" ,
        }
    ]
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;