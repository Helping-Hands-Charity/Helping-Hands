import mongoose from "mongoose";

const beneficiarySchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  nic: String,
  address: String,
  phone: String,
  details: String,
  status: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  creator: String,
  name: String,
});

const BeneficiaryModel = mongoose.model("Beneficiary", beneficiarySchema);
export default BeneficiaryModel;
