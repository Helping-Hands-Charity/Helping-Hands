import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
// import ReportReducer from "./features/reportSlice";



export default configureStore({

    reducer:{
        auth: AuthReducer,
        // report: ReportReducer,

    },
});
