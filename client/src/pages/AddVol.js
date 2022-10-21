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
import { createVolunteer, updateVolunteer } from "../redux/features/volSlice";

const initialState = {
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  nic: "",
  phone: "",
  des: "",
};

const AddVol = () => {
  const [volunteerData, setVolunteerData] = useState(initialState);
  const { error } = useSelector((state) => ({ ...state.volunteer }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, firstName, lastName, des, email, nic, phone } = volunteerData;
  const { id } = useParams();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && firstName && lastName && des && email && nic && phone) {
      const updatedVolunteerData = {
        ...volunteerData,
        name: user?.result?.name,
      };

      if (!id) {
        dispatch(createVolunteer({ updatedVolunteerData, navigate, toast }));
      } else {
        dispatch(
          updateVolunteer({ id, updatedVolunteerData, toast, navigate })
        );
      }
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setVolunteerData({ ...volunteerData, [name]: value });
  };

  return (
    <div
      className="col-12 col-md-12 col-sm-12 col-12"
      style={{ marginTop: "100px", marginBottom: "50px" }}
    >
      <div className="col-12 col-md-12 col-sm-12 col-12">
        <div class="row">
          <div className="col-9 col-md-9 col-sm-9 col-9"></div>
          <div className="col-3 col-md-3 col-sm-3 col-3">
            <MDBBtn
              color="secondary"
              href={"/all_vols"}
              style={{ float: "left" }}
            >
              {" "}
              <i class="fas fa-home"></i> &nbsp;Volunteer Dashboard
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
              {id ? "Update Volunteer" : "Register Volunteer"}
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
                    label="Title"
                    type="text"
                    className="form-control"
                    name="title"
                    id="title"
                    onChange={onInputChange}
                    invalid
                    validation="Please provide the title"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className=" col-md-5"></div>
              </div>
              &nbsp;
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
              &nbsp;
              <div className="row  justify-content-center">
                <div className="col col-md-10">
                  <MDBInput
                    label="Description"
                    type="text"
                    textarea
                    rows={3}
                    className="form-control"
                    name="des"
                    id="des"
                    onChange={onInputChange}
                    invalid
                    validation="Please provide the description"
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

export default AddVol;
