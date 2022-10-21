import mongoose from "mongoose";

const volunteerSchema = mongoose.Schema({
  title: String,
  firstName: String,
  lastName: String,
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    required: [true, "Email required"],
  },
  nic: {
    type: String,
    validate: {
      validator: function (a) {
        return /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/.test(a);
      },
      message: "Please enter a valid ID",
    },
    required: [true, "ID required"],
  },
  phone: {
    type: String,
    validate: {
      validator: function (b) {
        return /^(?:0|94|\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/.test(
          b
        );
      },
      message: "Please enter a valid Phone number",
    },
    required: [true, "Phone required"],
  },
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  creator: String,
  name: String,
});

const VolunteerModel = mongoose.model("Volunteer", volunteerSchema);
export default VolunteerModel;
