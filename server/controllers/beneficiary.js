import BeneficiaryModel from "../models/beneficiary.js";
import mongoose from "mongoose";

export const createBeneficiary = async (req, res) => {
  const beneficiary = req.body;
  const newBeneficiary = new BeneficiaryModel({
    ...beneficiary,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newBeneficiary.save();
    res.status(201).json(newBeneficiary);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getBeneficiary = async (req, res) => {
  const { id } = req.params;
  try {
    const beneficiary = await BeneficiaryModel.findById(id);
    res.status(200).json(beneficiary);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getBeneficiaries = async (req, res) => {
  try {
    const beneficiaries = await BeneficiaryModel.find();
    res.status(200).json(beneficiaries);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const deleteBeneficiary = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No beneficiary exist with id: ${id}` });
    }
    await BeneficiaryModel.findByIdAndRemove(id);
    res.json({ message: "Beneficiary deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const updateBeneficiary = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, address, email, phone, date, details } =
    req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No beneficiary found with the id: ${id}` });
    }

    const updatedBeneficiary = {
      firstName,
      lastName,
      address,
      email,
      phone,
      date,
      details,
      _id: id,
    };
    await BeneficiaryModel.findByIdAndUpdate(id, updatedBeneficiary, {
      new: true,
    });
    res.json(updatedBeneficiary);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
