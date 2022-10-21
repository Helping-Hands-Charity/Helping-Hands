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

import AddDonation from "./pages/AddDonation";
import EditDonation from "./pages/EditDonation";
import DonationDashboard from "./pages/DonationDashboard";
import SingleDonation from "./pages/SingleDonation";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
