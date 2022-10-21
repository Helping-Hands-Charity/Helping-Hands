import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import DonationReducer from "./features/donationSlice";
import ReportReducer from "./features/reportSlice";


export default configureStore({
  reducer: {
    auth: AuthReducer,
    donation: DonationReducer,
    // report: ReportReducer,
  },
});
