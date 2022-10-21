import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../api";

export const createVolunteer = createAsyncThunk(
    "volunteers/createVolunteer",
    async({updatedVolunteerData, navigate, toast},{rejectWithValue})=>{
    try{
        const response = await api.createVolunteer(updatedVolunteerData);
        toast.success("Volunteer added Successfully");
        navigate("/all_vols");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const getVolunteers = createAsyncThunk(
    "volunteers/getVolunteers",
    async( _,{rejectWithValue})=>{
    try{
        const response = await api.getVolunteers();
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const getVolunteer = createAsyncThunk(
    "volunteers/getVolunteer",
    async(id, {rejectWithValue})=>{
    try{
        const response = await api.getVolunteer(id);
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const deleteVolunteer= createAsyncThunk(
    "volunteers/deleteVolunteer",
    async({id,toast},{rejectWithValue})=>{
    try{
        const response = await api.deleteVolunteer(id);
        toast.success("Volunteer deleted successfully");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const updateVolunteer= createAsyncThunk(
    "volunteer/updateVolunteer",
    async({id, updatedVolunteerData, toast, navigate},{rejectWithValue})=>{
    try{
        const response = await api.updateVolunteer(updatedVolunteerData, id);
        toast.success("Volunteer updated successfully");
        navigate("/all_vols");
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const searchVolunteers= createAsyncThunk(
    "volunteer/searchVolunteers",
    async(searchQuery,{rejectWithValue})=>{
    try{
        const response = await api.getVolunteerBySearch(searchQuery);
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});



const volunteerSlice = createSlice({
    name: "volunteer",
    initialState: {
        volunteer:{},
        volunteers:[],
        userVolunteers:[],
        error: "",
        loading: false,
    },
 
    extraReducers:{
        [createVolunteer.pending]: (state,action)=>{
            state.loading = true;
        },
        [createVolunteer.fulfilled]:(state,action)=>{
            state.loading = false;
           state.volunteers= [action.payload];
        },
        [createVolunteer.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [getVolunteer.pending]: (state,action)=>{
            state.loading = true;
        },
        [getVolunteer.fulfilled]:(state,action)=>{
            state.loading = false;
           state.volunteer= action.payload;
        },
        [getVolunteer.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [getVolunteers.pending]: (state,action)=>{
            state.loading = true;
        },
        [getVolunteers.fulfilled]:(state,action)=>{
            state.loading = false;
           state.volunteers= action.payload;
        },
        [getVolunteers.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [deleteVolunteer.pending]: (state,action)=>{
            state.loading = true;
        },
        [deleteVolunteer.fulfilled]:(state,action)=>{
            state.loading = false;
            console.log("action", action);
           const {arg: {id}} = action.meta;
           if(id){
                state.userVolunteers = state.userVolunteers.filter((item)=> item._id !== id);
                state.volunteers = state.volunteers.filter((item)=> item._id !== id);
           }
        },
        [deleteVolunteer.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },
        [updateVolunteer.pending]: (state,action)=>{
            state.loading = true;
        },
        [updateVolunteer.fulfilled]:(state,action)=>{
            state.loading = false;
           
           const {arg: {id}} = action.meta;
           if(id){
               state.userVolunteers = state.userVolunteers.map((item)=> item._id === id? action.payload: item);
               state.volunteers = state.volunteers.map((item)=> item._id === id? action.payload: item);
           }
        },
        [updateVolunteer.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },

        [searchVolunteers.pending]: (state,action)=>{
            state.loading = true;
        },
        [searchVolunteers.fulfilled]:(state,action)=>{
            state.loading = false;
           state.volunteers= action.payload;
        },
        [searchVolunteers.rejected]:(state, action)=>{
          state.loading = false;
          state.error = action.payload.message;
        },


    },
});

export default volunteerSlice.reducer;