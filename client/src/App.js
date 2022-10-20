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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
