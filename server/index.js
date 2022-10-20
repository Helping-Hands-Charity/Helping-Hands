import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import donorRouter from "./routes/donor.js";
import donationRouter from "./routes/donation.js";
import beneficiaryRouter from "./routes/beneficiary.js";
import volunteerRouter from "./routes/volunteer.js";

const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); //http://localhost:5000/users/signup

app.use("/donors", donorRouter); //http://localhost:5000/donors
app.use("/donations", donationRouter); //http://localhost:5000/donations
app.use("/beneficiaries", beneficiaryRouter); //http://localhost:5000/beneficiaries
app.use("/volunteers", volunteerRouter); //http://localhost:5000/volunteers
app.use("/donors", donorRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Helping Hands API");
});

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server is running on ${port}`));
  })
  .catch((error) => console.log(`${port}did not connect`));
