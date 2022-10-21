import React, {useState, useEffect} from 'react';
import { MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBCardHeader, MDBValidation } from "mdb-react-ui-kit";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {createDonor, updateDonor} from "../redux/features/donorSlice";

const initialState={
    firstName: "",
    lastName: "",
    email: "",
    nic: "",
    address: "",
    phone: ""  
}

const AddEditDonor =()=>{

    const [donorData, setDonorData]= useState(initialState);
    const {error,donors} = useSelector ((state)=>({...state.donor}));
    const {user} = useSelector ((state)=>({...state.auth}));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const{firstName, lastName, address, email, nic, phone}= donorData;
    const {id} = useParams();

    useEffect(()=>{

        if(id){
            console.log(id);
            const singleDonor = donors.find((donor)=> donor._id === id);
            console.log(singleDonor);
            setDonorData({ ...singleDonor });
            }
        },[id])
    
    useEffect(()=>{
    error && toast.error(error);
    }, [error]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(firstName && lastName && address && email && nic && phone){
            const updatedDonorData = {...donorData,name: user?.result?.name};

            if(!id){
                dispatch(createDonor({updatedDonorData, navigate, toast}));
            }else{
                dispatch(updateDonor({id,updatedDonorData,toast,navigate}));
            }

            handleClear();
        }
    
    };
    
    const onInputChange = (e) => {
        const{name,value}= e.target;
        setDonorData({...donorData, [name]: value });
    
    };
    
    const handleClear= () => {
        setDonorData({firstName:"", lastName:"", email:"", address:"", nic:"", phone:""})
    };

    return(
        <div className="col-12 col-md-12 col-sm-12 col-12" style={{marginTop:"100px"}}>
            <div style={{ margin: "auto", padding: "15px", maxWidth: "750px", alignContent: "center", marginTop: "40px", }}>
                <MDBCard alignment="center">
                    <MDBCardHeader>
                        <h4 style={{ fontWeight: 'bold' }}>{id? "Update Donor" : "Register Donor"}</h4>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBValidation className='add_form' onSubmit={handleSubmit} noValidate>
                            <div className="row justify-content-center">
                                <div className=" col-md-5">
                                    <MDBInput
                                        label="First Name" 
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        id="firstName"
                                        value={firstName || ''}
                                        onChange={onInputChange}
                                        invalid 
                                        validation="Please provide the first name"
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                                <div className="col col-md-5">
                                    <MDBInput
                                        label="Last Name"
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        id="lastName"
                                        value={lastName || ''}
                                        onChange={onInputChange}
                                        invalid 
                                        validation="Please provide the last name"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            &nbsp;
                            <div className="row  justify-content-center">
                                <div className="col col-md-10">
                                    <MDBInput
                                        label="Home Address"
                                        type="text"
                                        className="form-control"
                                        name="address"
                                        id="address"
                                        value={address || ''}
                                        onChange={onInputChange}
                                        invalid 
                                        validation="Please provide the address"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            &nbsp;
                            <div className="row  justify-content-center">
                                <div className="col col-md-10">
                                    <MDBInput
                                        type="text"
                                        label="Email Address"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        value={email || ''}
                                        onChange={onInputChange}
                                        invalid 
                                        validation="Please provide the email"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            &nbsp;
                            <div className="row justify-content-center">
                                <div className="col col-md-5">
                                    <MDBInput
                                        label="NIC Number"
                                        type="text"
                                        className="form-control"
                                        name="nic"
                                        id="nic"
                                        value={nic || ''}
                                        onChange={onInputChange}
                                        invalid 
                                        validation="Please provide the NIC"
                                        required
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="col col-md-5">
                                    <MDBInput
                                        label="Phone Number"
                                        type="number"
                                        className="form-control"
                                        name="phone"
                                        id="phone"
                                        maxLength="10"
                                        value={phone || ''}
                                        onChange={onInputChange}
                                        invalid 
                                        validation="Please provide the phone number"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <MDBBtn className="btn btn-success" style={{width:"15%"}}>{id? "Update": "Submit"}</MDBBtn>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <MDBBtn style={{ width: "15%" }} className="btn btn-primary" onClick={handleClear}>
                                    Clear
                                </MDBBtn>
                            </div>
                        </MDBValidation>
                        <br />
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    )
};

export default AddEditDonor;