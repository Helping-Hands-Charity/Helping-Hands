import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import DonorReducer from "./features/donorSlice";
import DonationReducer from "./features/donationSlice";
import BeneficiaryReducer from "./features/beneSlice";
import VolunteerReducer from "./features/volSlice";



export default configureStore({

    reducer:{
        auth: AuthReducer,
        donor: DonorReducer,
        donation: DonationReducer,
        beneficiary: BeneficiaryReducer,
        volunteer: VolunteerReducer,
    },
});
