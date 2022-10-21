import { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import Register from "./pages/Register";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import HomeView from "./pages/HomeView";

import AddDonor from "./pages/AddDonor";
import EditDonor from "./pages/EditDonor";
import DonorDashboard from "./pages/DonorDashboard";
import SingleDonor from "./pages/SingleDonor";

import AddDonation from "./pages/AddDonation";
import EditDonation from "./pages/EditDonation";
import DonationDashboard from "./pages/DonationDashboard";
import SingleDonation from "./pages/SingleDonation";

import AddBene from "./pages/AddBene";
import EditBene from "./pages/EditBene";
import BeneDashboard from "./pages/BeneDashboard";
import SingleBene from "./pages/SingleBene";

import AddVol from "./pages/AddVol";
import EditVol from "./pages/EditVol";
import VolDashboard from "./pages/VolDashboard";
import SingleVol from "./pages/SingleVol";


function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
           <Route
            path="/add_donor"
            element={
              <PrivateRoute>
                <AddDonor />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit_donor/:id"
            element={
              <PrivateRoute>
                <EditDonor />
              </PrivateRoute>
            }
          />
          <Route
            path="/all_donors"
            element={
              <PrivateRoute>
                <DonorDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/donor/:id"
            element={
              <PrivateRoute>
                <SingleDonor />
              </PrivateRoute>  
            }
          />

          <Route
            path="/add_donation"
            element={
              <PrivateRoute>
                <AddDonation />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit_donation/:id"
            element={
              <PrivateRoute>
                <EditDonation />
              </PrivateRoute>
            }
          />
          <Route
            path="/all_donations"
            element={
              <PrivateRoute>
                <DonationDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/donation/:id"
            element={
              <PrivateRoute>
                <SingleDonation />
              </PrivateRoute>
            }
          />

          <Route
            path="/add_bene"
            element={
              <PrivateRoute>
                <AddBene />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit_bene/:id"
            element={
              <PrivateRoute>
                <EditBene />
              </PrivateRoute>
            }
          />
          <Route
            path="/all_benes"
            element={
              <PrivateRoute>
                <BeneDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/bene/:id"
            element={
              <PrivateRoute>
                <SingleBene />
              </PrivateRoute>
            }
          />

          <Route
            path="/add_vol"
            element={
              <PrivateRoute>
                <AddVol />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit_vol/:id"
            element={
              <PrivateRoute>
                <EditVol />
              </PrivateRoute>
            }
          />
          <Route
            path="/all_vols"
            element={
              <PrivateRoute>
                <VolDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/volunteer/:id"
            element={
              <PrivateRoute>
                <SingleVol />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
