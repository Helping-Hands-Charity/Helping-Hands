import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../api";

export const createDonor = createAsyncThunk(
    "donors/createDonor",
    async({updatedDonorData, navigate, toast},{rejectWithValue})=>{
    try{
        const response = await api.createDonor(updatedDonorData);
        toast.success("Donor added Successfully");
        navigate("/all_donors");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const getDonors = createAsyncThunk(
    "donors/getDonors",
    async( _,{rejectWithValue})=>{
    try{
        const response = await api.getDonors();
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const getDonor = createAsyncThunk(
    "donors/getDonor",
    async(id, {rejectWithValue})=>{
    try{
        const response = await api.getDonor(id);
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const deleteDonor= createAsyncThunk(
    "donors/deleteDonor",
    async({id,toast},{rejectWithValue})=>{
    try{
        const response = await api.deleteDonor(id);
        toast.success("Donor deleted successfully");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const updateDonor= createAsyncThunk(
    "donor/updateDonor",
    async({id, updatedDonorData, toast, navigate},{rejectWithValue})=>{
    try{
        const response = await api.updateDonor(updatedDonorData, id);
        toast.success("Donor updated successfully");
        navigate("/all_donors");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const searchDonors= createAsyncThunk(
    "donor/searchDonors",
    async(searchQuery,{rejectWithValue})=>{
    try{
        const response = await api.getDonorBySearch(searchQuery);
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});



const donorSlice = createSlice({
    name: "donor",
    initialState: {
        donor:{},
        donors:[],
        userDonors:[],
        error: "",
        loading: false,
    },
 
    extraReducers:{
        [createDonor.pending]: (state,action)=>{
            state.loading = true;
        },
        [createDonor.fulfilled]:(state,action)=>{
            state.loading = false;
           state.donors= [action.payload];
        },
        [createDonor.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [getDonor.pending]: (state,action)=>{
            state.loading = true;
        },
        [getDonor.fulfilled]:(state,action)=>{
            state.loading = false;
           state.donor= action.payload;
        },
        [getDonor.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [getDonors.pending]: (state,action)=>{
            state.loading = true;
        },
        [getDonors.fulfilled]:(state,action)=>{
            state.loading = false;
           state.donors= action.payload;
        },
        [getDonors.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [deleteDonor.pending]: (state,action)=>{
            state.loading = true;
        },
        [deleteDonor.fulfilled]:(state,action)=>{
            state.loading = false;
            console.log("action", action);
           const {arg: {id}} = action.meta;
           if(id){
                state.userDonors = state.userDonors.filter((item)=> item._id !== id);
                state.donors = state.donors.filter((item)=> item._id !== id);
           }
        },
        [deleteDonor.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [updateDonor.pending]: (state,action)=>{
            state.loading = true;
        },
        [updateDonor.fulfilled]:(state,action)=>{
            state.loading = false;
           
           const {arg: {id}} = action.meta;
           if(id){
               state.userDonors = state.userDonors.map((item)=> item._id === id? action.payload: item);
               state.donors = state.donors.map((item)=> item._id === id? action.payload: item);
           }
        },
        [updateDonor.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },

        [searchDonors.pending]: (state,action)=>{
            state.loading = true;
        },
        [searchDonors.fulfilled]:(state,action)=>{
            state.loading = false;
           state.reports= action.payload;
        },
        [searchDonors.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },


    },
});

export default donorSlice.reducer;