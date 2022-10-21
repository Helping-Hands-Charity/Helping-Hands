import DonationModel from "../models/donation.js";
import mongoose from "mongoose";

export const createDonation = async(req,res)=>{
    const donation= req.body;
    const newDonation = new DonationModel({
        ...donation,
        creator: req.userId,
        createdAt: new Date().toISOString()
    });
    try{
        await newDonation.save();
        res.status(201).json(newDonation);
    }catch(error){
        res.status(404).json({message: "Something went wrong"});
    }
};

export const getDonation = async(req,res)=>{
    const {id} = req.params
    try{
        const donation = await DonationModel.findById(id);
        res.status(200).json(donation)
    }catch(error){

        res.status(404).json({message: "Something went wrong"});
    }
};

export const getDonations = async(req,res)=>{
    try{
        const donations = await DonationModel.find();
        res.status(200).json(donations)
    }catch(error){

        res.status(404).json({message: "Something went wrong"});
    }
};

export const deleteDonation = async (req, res) => {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No donation exist with id: ${id}` });
      }
      await DonationModel.findByIdAndRemove(id);
      res.json({ message: "Donation deleted successfully" });
    } catch (error) {
      res.status(404).json({ message: "Something went wrong" });
    }
};


  export const updateDonation = async(req,res)=>{
    const {id} = req.params;
    const {item, type, date, des, org, amount} = req.body;

    try{

        const updatedDonation={
            item,
            type,
            date,
            des,
            org,
            amount,
            _id: id
        }
        await DonationModel.findByIdAndUpdate(id, updatedDonation, {new:true});
        res.json(updatedDonation);
    }catch(error){
        res.status(404).json({message: "Something went wrong"});
    }
    
};

export const getDonationsBySearch = async(req,res)=>{
    const {searchQuery}=req.query;
    try{
        const item= new RegExp(searchQuery,"i");
        const donations = await DonationModel.find({item});
        res.json(donations);
    }catch(error){
        res.status(404).json({message:"Something went wrong"});
    }
};