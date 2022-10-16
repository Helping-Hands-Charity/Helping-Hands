import mongoose from "mongoose";

const donorSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    nic: String,
    address: String,
    phone: String,
    createdAt:{
        type: Date,
        default: new Date(),
    },
    creator: String,
    name: String
});

const DonorModel = mongoose.model("Donor", donorSchema);
export default DonorModel;