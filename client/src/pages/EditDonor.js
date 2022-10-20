import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBCardHeader, MDBValidation } from "mdb-react-ui-kit";
import {toast} from "react-toastify";
import {useNavigate, useParams, Link} from "react-router-dom";


const EditDonor = () => {

    const {id} = useParams();

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [address,setAddress] = useState('');
    const [email,setEmail] = useState('');
    const [nic,setNic] = useState('');
    const [phone,setPhone] = useState('');

    useEffect(() => {
        if(id){
            axios.get("http://localhost:5000/donors/" + id).then((res) => {
                console.log(res.data);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setAddress(res.data.address);
                setEmail(res.data.email);
                setNic(res.data.nic);
                setPhone(res.data.phone);
            })
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const donor = await axios.patch('http://localhost:5000/donors/' + id,{
                firstName:firstName,
                lastName:lastName,
                address:address,
                email:email,
                nic:nic,
                phone:phone
      
            });
            window.location.replace("/all_donors")
            console.log(donor.data);
      
         } catch(error) {
          console.log(error.response);
         }
    };


  return (
    <div className="col-12 col-md-12 col-sm-12 col-12" style={{marginTop:"100px"}}>
            <div className="col-12 col-md-12 col-sm-12 col-12" >
                <div class="row">
                    <div className="col-9 col-md-9 col-sm-9 col-9" ></div>
                    <div className="col-3 col-md-3 col-sm-3 col-3" >
                        <MDBBtn color="secondary" href={"/all_donors"} style={{ float: 'left' }}> <i class="fas fa-home"></i> &nbsp;Donor Dashboard</MDBBtn>
                    </div> 
                </div>
            </div>  

            <div style={{ margin: "auto", padding: "15px", maxWidth: "750px", alignContent: "center", marginTop: "10px", }}>
                <MDBCard alignment="center">
                    <MDBCardHeader>
                        <h4 style={{ fontWeight: 'bold' }}>Update Donor</h4>
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
                                        onChange = {(e) =>setFirstName(e.target.value)}
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
                                        onChange = {(e) =>setLastName(e.target.value)}
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
                                        onChange = {(e) =>setAddress(e.target.value)}
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
                                        onChange = {(e) =>setEmail(e.target.value)}
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
                                        onChange = {(e) =>setNic(e.target.value)}
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
                                        onChange = {(e) =>setPhone(e.target.value)}
                                        invalid 
                                        validation="Please provide the phone number"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <MDBBtn className="btn btn-success" style={{width:"15%"}}>Update</MDBBtn>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <Link to="/all_donors">
                                <MDBBtn style={{ width: "15%" }} className="btn btn-primary">
                                    Cancel
                                </MDBBtn>
                                </Link>
                            </div>
                        </MDBValidation>
                        <br />
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
  )
}

export default EditDonor