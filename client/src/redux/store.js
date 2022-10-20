import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import DonorReducer from "./features/donorSlice";



export default configureStore({

    reducer:{
        auth: AuthReducer,
        donor: DonorReducer,

    },
});
