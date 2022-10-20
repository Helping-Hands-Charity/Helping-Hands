import axios from "axios";

// const devEnv = process.env.NODE_ENV !== "production";
// const {REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;
 
const API = axios.create({
  baseURL: "http://localhost:5000" ,
});

 API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
     }
     return req;
 });

 export const signIn = (formData)=> API.post("/users/signin", formData);
 export const signUp = (formData)=> API.post("/users/signup", formData);
 export const googleSignIn = (result)=> API.post("/users/googleSignIn", result);

 export const createDonor = (donorData)=> API.post("/donors", donorData);
 export const getDonors = ()=> API.get("/donors");
 export const getDonor = (id)=> API.get(`/donors/${id}`);
 export const deleteDonor = (id)=> API.delete(`/donors/${id}`);
 export const updateDonor = (updatedDonorData,id)=> API.patch(`/donors/${id}`, updatedDonorData);

 export const getDonorBySearch = (searchQuery)=> API.get(`/donors/search?searchQuery=${searchQuery}`);
