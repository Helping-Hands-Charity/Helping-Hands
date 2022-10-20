import VolunteerModel from "../models/volunteer.js";
import mongoose from "mongoose";

export const createVolunteer = async (req, res) => {
  const volunteer = req.body;
  const newVolunteer = new VolunteerModel({
    ...volunteer,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newVolunteer.save();
    res.status(201).json(newVolunteer);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getVolunteer = async (req, res) => {
  const { id } = req.params;
  try {
    const volunteer = await VolunteerModel.findById(id);
    res.status(200).json(volunteer);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getVolunteers = async (req, res) => {
  try {
    const volunteers = await VolunteerModel.find();
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const deleteVolunteer = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No volunteer exist with id: ${id}` });
    }
    await VolunteerModel.findByIdAndRemove(id);
    res.json({ message: "Volunteer deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const updateVolunteer = async (req, res) => {
  const { id } = req.params;
  const { title, firstName, lastName, email, nic, phone, description } =
    req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No volunteer found with the id: ${id}` });
    }

    const updatedVolunteer = {
      title,
      firstName,
      lastName,
      email,
      nic,
      phone,
      description,
      _id: id,
    };
    await VolunteerModel.findByIdAndUpdate(id, updatedVolunteer, { new: true });
    res.json(updatedVolunteer);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
