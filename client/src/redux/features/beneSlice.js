import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../api";

export const createBeneficiary = createAsyncThunk(
    "beneficiaries/createBeneficiary",
    async({updatedBeneficiaryData, navigate, toast},{rejectWithValue})=>{
    try{
        const response = await api.createBeneficiary(updatedBeneficiaryData);
        toast.success("Beneficiary added Successfully");
        navigate("/all_benes");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const getBeneficiaries = createAsyncThunk(
    "beneficiaries/getBeneficiaries",
    async( _,{rejectWithValue})=>{
    try{
        const response = await api.getBeneficiaries();
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const getBeneficiary = createAsyncThunk(
    "beneficiaries/getBeneficiary",
    async(id, {rejectWithValue})=>{
    try{
        const response = await api.getBeneficiary(id);
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const deleteBeneficiary= createAsyncThunk(
    "beneficiaries/deleteBeneficiary",
    async({id,toast},{rejectWithValue})=>{
    try{
        const response = await api.deleteBeneficiary(id);
        toast.success("Beneficiary deleted successfully");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const updateBeneficiary= createAsyncThunk(
    "beneficiary/updateBeneficiary",
    async({id, updatedBeneficiaryData, toast, navigate},{rejectWithValue})=>{
    try{
        const response = await api.updateBeneficiary(updatedBeneficiaryData, id);
        toast.success("Beneficiary updated successfully");
        navigate("/all_benes");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const searchBeneficiaries = createAsyncThunk(
    "beneficiary/searchBeneficiaries",
    async(searchQuery,{rejectWithValue})=>{
    try{
        const response = await api.getBeneficiaryBySearch(searchQuery);
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});



const beneficiarySlice = createSlice({
    name: "beneficiary",
    initialState: {
        beneficiary:{},
        beneficiaries:[],
        userBeneficiaries:[],
        error: "",
        loading: false,
    },
 
    extraReducers:{
        [createBeneficiary.pending]: (state,action)=>{
            state.loading = true;
        },
        [createBeneficiary.fulfilled]:(state,action)=>{
            state.loading = false;
           state.beneficiaries = [action.payload];
        },
        [createBeneficiary.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [getBeneficiary.pending]: (state,action)=>{
            state.loading = true;
        },
        [getBeneficiary.fulfilled]:(state,action)=>{
            state.loading = false;
           state.beneficiary = action.payload;
        },
        [getBeneficiary.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [getBeneficiaries.pending]: (state,action)=>{
            state.loading = true;
        },
        [getBeneficiaries.fulfilled]:(state,action)=>{
            state.loading = false;
           state.beneficiaries = action.payload;
        },
        [getBeneficiaries.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [deleteBeneficiary.pending]: (state,action)=>{
            state.loading = true;
        },
        [deleteBeneficiary.fulfilled]:(state,action)=>{
            state.loading = false;
            console.log("action", action);
           const {arg: {id}} = action.meta;
           if(id){
                state.userBeneficiaries = state.userBeneficiaries.filter((item)=> item._id !== id);
                state.beneficiaries = state.beneficiaries.filter((item)=> item._id !== id);
           }
        },
        [deleteBeneficiary.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [updateBeneficiary.pending]: (state,action)=>{
            state.loading = true;
        },
        [updateBeneficiary.fulfilled]:(state,action)=>{
            state.loading = false;
           
           const {arg: {id}} = action.meta;
           if(id){
               state.userBeneficiaries = state.userBeneficiaries.map((item)=> item._id === id? action.payload: item);
               state.beneficiaries = state.beneficiaries.map((item)=> item._id === id? action.payload: item);
           }
        },
        [updateBeneficiary.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },

        [searchBeneficiaries.pending]: (state,action)=>{
            state.loading = true;
        },
        [searchBeneficiaries.fulfilled]:(state,action)=>{
            state.loading = false;
           state.beneficiaries= action.payload;
        },
        [searchBeneficiaries.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },


    },
});

export default beneficiarySlice.reducer;