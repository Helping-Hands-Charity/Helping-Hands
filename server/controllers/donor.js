import DonorModel from "../models/donor.js";
import mongoose from "mongoose";

export const createDonor = async (req, res) => {
  const donor = req.body;
  const newDonor = new DonorModel({
    ...donor,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newDonor.save();
    res.status(201).json(newDonor);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getDonor = async (req, res) => {
  const { id } = req.params;
  try {
    const donor = await DonorModel.findById(id);
    res.status(200).json(donor);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getDonors = async (req, res) => {
  try {
    const donors = await DonorModel.find();
    res.status(200).json(donors);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const deleteDonor = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No donor exist with id: ${id}` });
    }
    await DonorModel.findByIdAndRemove(id);
    res.json({ message: "Donor deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const updateDonor = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, nic, address, phone } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No donor found with the id: ${id}` });
    }

    const updatedDonor = {
      firstName,
      lastName,
      email,
      nic,
      address,
      phone,
      _id: id,
    };
    await DonorModel.findByIdAndUpdate(id, updatedDonor, { new: true });
    res.json(updatedDonor);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
