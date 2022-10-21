import mongoose from "mongoose";

const volunteerSchema = mongoose.Schema({
  title: String,
  firstName: String,
  lastName: String,
  email: String,
  nic: String,
  phone: String,
  des: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  creator: String,
  name: String,
});

const VolunteerModel = mongoose.model("Volunteer", volunteerSchema);
export default VolunteerModel;
