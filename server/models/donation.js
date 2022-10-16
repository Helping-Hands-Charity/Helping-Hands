import mongoose from "mongoose";

const donationSchema = mongoose.Schema({

    createdAt:{
        type: Date,
        default: new Date(),
    },
    creator: String,
    name: String
});

const DonationModel = mongoose.model("Donor", donationSchema);
export default DonationModel;