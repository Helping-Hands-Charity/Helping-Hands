import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../api";

export const createDonation = createAsyncThunk(
    "donations/createDonation",
    async({updatedDonationData, navigate, toast},{rejectWithValue})=>{
    try{
        const response = await api.createDonation(updatedDonationData);
        toast.success("Donation added Successfully");
        navigate("/all_donations");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const getDonations = createAsyncThunk(
    "donations/getDonations",
    async( _,{rejectWithValue})=>{
    try{
        const response = await api.getDonations();
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const getDonation = createAsyncThunk(
    "donations/getDonation",
    async(id, {rejectWithValue})=>{
    try{
        const response = await api.getDonation(id);
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const deleteDonation= createAsyncThunk(
    "donations/deleteDonor",
    async({id,toast},{rejectWithValue})=>{
    try{
        const response = await api.deleteDonation(id);
        toast.success("Donation deleted successfully");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const updateDonation= createAsyncThunk(
    "donation/updateDonation",
    async({id, updatedDonationData, toast, navigate},{rejectWithValue})=>{
    try{
        const response = await api.updateDonation(updatedDonationData, id);
        toast.success("Donation updated successfully");
        navigate("/all_donations");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const searchDonations= createAsyncThunk(
    "donation/searchDonations",
    async(searchQuery,{rejectWithValue})=>{
    try{
        const response = await api.getDonationBySearch(searchQuery);
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});



const donationSlice = createSlice({
    name: "donation",
    initialState: {
        donation:{},
        donations:[],
        userDonations:[],
        error: "",
        loading: false,
    },
 
    extraReducers:{
        [createDonation.pending]: (state,action)=>{
            state.loading = true;
        },
        [createDonation.fulfilled]:(state,action)=>{
            state.loading = false;
           state.donations= [action.payload];
        },
        [createDonation.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [getDonation.pending]: (state,action)=>{
            state.loading = true;
        },
        [getDonation.fulfilled]:(state,action)=>{
            state.loading = false;
           state.donation= action.payload;
        },
        [getDonation.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [getDonations.pending]: (state,action)=>{
            state.loading = true;
        },
        [getDonations.fulfilled]:(state,action)=>{
            state.loading = false;
           state.donations= action.payload;
        },
        [getDonations.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [deleteDonation.pending]: (state,action)=>{
            state.loading = true;
        },
        [deleteDonation.fulfilled]:(state,action)=>{
            state.loading = false;
            console.log("action", action);
           const {arg: {id}} = action.meta;
           if(id){
                state.userDonations = state.userDonations.filter((item)=> item._id !== id);
                state.donations = state.donations.filter((item)=> item._id !== id);
           }
        },
        [deleteDonation.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [updateDonation.pending]: (state,action)=>{
            state.loading = true;
        },
        [updateDonation.fulfilled]:(state,action)=>{
            state.loading = false;
           
           const {arg: {id}} = action.meta;
           if(id){
               state.userDonations = state.userDonations.map((item)=> item._id === id? action.payload: item);
               state.donations = state.donations.map((item)=> item._id === id? action.payload: item);
           }
        },
        [updateDonation.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },

        [searchDonations.pending]: (state,action)=>{
            state.loading = true;
        },
        [searchDonations.fulfilled]:(state,action)=>{
            state.loading = false;
           state.donations= action.payload;
        },
        [searchDonations.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },


    },
});

export default donationSlice.reducer;