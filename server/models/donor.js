import mongoose from "mongoose";

const donorSchema = mongoose.Schema({
<<<<<<< HEAD
  firstName: String,
  lastName: String,
  email: String,
  nic: String,
  address: String,
  phone: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  creator: String,
  name: String,
});

const DonorModel = mongoose.model("Donor", donorSchema);
export default DonorModel;
=======
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
>>>>>>> de0bd18b104782e742ae7fc270b8b2616c5fdc67
