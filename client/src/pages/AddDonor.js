import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBCardHeader,
  MDBValidation,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createDonor, updateDonor } from "../redux/features/donorSlice";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  nic: "",
  address: "",
  phone: "",
};

const AddDonor = () => {
  const [donorData, setDonorData] = useState(initialState);
  const { error } = useSelector((state) => ({ ...state.donor }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { firstName, lastName, address, email, nic, phone } = donorData;
  const { id } = useParams();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName && address && email && nic && phone) {
      const updatedDonorData = { ...donorData, name: user?.result?.name };

      if (!id) {
        dispatch(createDonor({ updatedDonorData, navigate, toast }));
      } else {
        dispatch(updateDonor({ id, updatedDonorData, toast, navigate }));
      }
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setDonorData({ ...donorData, [name]: value });
  };

  return (
    <div
      className="col-12 col-md-12 col-sm-12 col-12"
      style={{ marginTop: "100px" }}
    >
      <div className="col-12 col-md-12 col-sm-12 col-12">
        <div class="row">
          <div className="col-9 col-md-9 col-sm-9 col-9"></div>
          <div className="col-3 col-md-3 col-sm-3 col-3">
            <MDBBtn
              color="secondary"
              href={"/all_donors"}
              style={{ float: "left" }}
            >
              {" "}
              <i class="fas fa-home"></i> &nbsp;Donor Dashboard
            </MDBBtn>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "750px",
          alignContent: "center",
          marginTop: "10px",
        }}
      >
        <MDBCard alignment="center">
          <MDBCardHeader>
            <h4 style={{ fontWeight: "bold" }}>
              {id ? "Update Donor" : "Register Donor"}
            </h4>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBValidation
              className="add_form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="row justify-content-center">
                <div className=" col-md-5">
                  <MDBInput
                    label="First Name"
                    type="text"
                    className="form-control"
                    name="firstName"
                    id="firstName"
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
                    onChange={onInputChange}
                    invalid
                    validation="Please provide the phone number"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="col-12 mt-4">
                <MDBBtn className="btn btn-success" style={{ width: "15%" }}>
                  {id ? "Update" : "Submit"}
                </MDBBtn>
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
  );
};

export default AddDonor;
