import mongoose from "mongoose";

const beneficiarySchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  email: String,
  phone: String,
  date: String,
  details: String,
  
  createdAt: {
    type: Date,
    default: new Date(),
  },
  creator: String,
  name: String,
});

const BeneficiaryModel = mongoose.model("Beneficiary", beneficiarySchema);
export default BeneficiaryModel;
