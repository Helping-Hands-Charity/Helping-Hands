import axios from "axios";

// const devEnv = process.env.NODE_ENV !== "production";
// const {REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);

// Function - Donation
export const createDonation = (donationData) =>
  API.post("/donations", donationData);
export const getDonations = () => API.get("/donations");
export const getDonation = (id) => API.get(`/donations/${id}`);
export const deleteDonation = (id) => API.delete(`/donations/${id}`);
export const updateDonation = (updatedDonationData, id) =>
  API.patch(`/donations/${id}`, updatedDonationData);
export const getDonationBySearch = (searchQuery) =>
  API.get(`/donations/search?searchQuery=${searchQuery}`);
