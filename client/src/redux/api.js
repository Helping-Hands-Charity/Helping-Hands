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

// Function - Donor
 export const createDonor = (donorData)=> API.post("/donors", donorData);
 export const getDonors = ()=> API.get("/donors");
 export const getDonor = (id)=> API.get(`/donors/${id}`);
 export const deleteDonor = (id)=> API.delete(`/donors/${id}`);
 export const updateDonor = (updatedDonorData,id)=> API.patch(`/donors/${id}`, updatedDonorData);
 export const getDonorBySearch = (searchQuery)=> API.get(`/donors/search?searchQuery=${searchQuery}`);

 // Function - Donation
 export const createDonation = (donationData)=> API.post("/donations", donationData);
 export const getDonations = ()=> API.get("/donations");
 export const getDonation = (id)=> API.get(`/donations/${id}`);
 export const deleteDonation = (id)=> API.delete(`/donations/${id}`);
 export const updateDonation = (updatedDonationData,id)=> API.patch(`/donations/${id}`, updatedDonationData);
 export const getDonationBySearch = (searchQuery)=> API.get(`/donations/search?searchQuery=${searchQuery}`);

  // Function - Beneficiary
  export const createBeneficiary = (beneficiaryData)=> API.post("/beneficiaries", beneficiaryData);
  export const getBeneficiaries = ()=> API.get("/beneficiaries");
  export const getBeneficiary = (id)=> API.get(`/beneficiaries/${id}`);
  export const deleteBeneficiary = (id)=> API.delete(`/beneficiaries/${id}`);
  export const updateBeneficiary = (updatedBeneficiaryData,id)=> API.patch(`/beneficiaries/${id}`, updatedBeneficiaryData);
  export const getBeneficiaryBySearch = (searchQuery)=> API.get(`/beneficiaries/search?searchQuery=${searchQuery}`);

   // Function - Volunteer
 export const createVolunteer = (donationData)=> API.post("/volunteers", donationData);
 export const getVolunteers = ()=> API.get("/volunteers");
 export const getVolunteer = (id)=> API.get(`/volunteers/${id}`);
 export const deleteVolunteer = (id)=> API.delete(`/volunteers/${id}`);
 export const updateVolunteer = (updatedDonationData,id)=> API.patch(`/volunteers/${id}`, updatedDonationData);
 export const getVolunteerBySearch = (searchQuery)=> API.get(`/volunteers/search?searchQuery=${searchQuery}`);