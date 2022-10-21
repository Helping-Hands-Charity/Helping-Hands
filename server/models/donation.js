import mongoose from "mongoose";

const donationSchema = mongoose.Schema({

    item: String,
    type: String,
    date: String,
    des: String,
    org: String,
    amount: String,

    createdAt:{
        type: Date,
        default: new Date(),
    },
    creator: String,
    name: String
});

const DonationModel = mongoose.model("Donation", donationSchema);
export default DonationModel;