import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../api";

export const createDonor = createAsyncThunk(
    "donors/create_donor",
    async({updatedDonorData, navigate, toast},{rejectWithValue})=>{
    try{
        const response = await api.createDonor(updatedDonorData);
        toast.success("Donor added Successfully");
        navigate("/home");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const getDonorsByUser = createAsyncThunk(
    "donor/get_donors_by_user",
    async(userId,{rejectWithValue})=>{
    try{
        const response = await api.getDonorsByUser(userId);
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const getDonor = createAsyncThunk(
    "donor/get_donor",
    async(id,{rejectWithValue})=>{
    try{
        const response = await api.getDonor(id);
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const deleteDonor= createAsyncThunk(
    "donor/delete_donor",
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
    "donor/update_donor",
    async({id, updatedDonorData, toast, navigate},{rejectWithValue})=>{
    try{
        const response = await api.updateDonor(updatedDonorData, id);
        toast.success("Donor updated successfully");
        navigate("/home");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});



// 
const reportSlice = createSlice({
    name: "donor",
    initialState: {
        donor:{},
        donors:[],
        userDonors:[],
        currentPage: 1,
        numberOfPages: null,
        error: "",
        loading: false,
    },
    reducers:{
        setCurrentPage: (state, action) =>{
            state.currentPage = action.payload;
        }
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
        [getDonorsByUser.pending]: (state,action)=>{
            state.loading = true;
        },
        [getDonorsByUser.fulfilled]:(state,action)=>{
            state.loading = false;
           state.userDonors= action.payload;
        },
        [getDonorsByUser.rejected]:(state, action)=>{
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
               state.userDonors = state.userDonors.map((item)=> 
               item._id === id? action.payload: item);
               state.donors = state.donors.map((item)=> 
               item._id === id? action.payload: item);
           }
        },
        [updateDonor.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        }

    },
});

export const  {setCurrentPage} = reportSlice.actions;

export default reportSlice.reducer;