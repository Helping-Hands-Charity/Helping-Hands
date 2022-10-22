import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBCardHeader,
  MDBValidation,
} from "mdb-react-ui-kit";
import { useParams, Link } from "react-router-dom";

const EditVol = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [des, setDes] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (id) {
      axios.get("http://localhost:5000/volunteers/" + id).then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setDes(res.data.des);
        setEmail(res.data.email);
        setNic(res.data.nic);
        setPhone(res.data.phone);
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const volunteer = await axios.patch(
        "http://localhost:5000/volunteers/" + id,
        {
          title: title,
          firstName: firstName,
          lastName: lastName,
          des: des,
          email: email,
          nic: nic,
          phone: phone,
        }
      );
      window.location.replace("/all_vols");
      console.log(volunteer.data);
    } catch (error) {
      console.log(error.response);
    }
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
            <h4 style={{ fontWeight: "bold" }}>Update Volunteer</h4>
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
                    value={title || ""}
                    onChange={(e) => setTitle(e.target.value)}
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
                    value={firstName || ""}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    value={lastName || ""}
                    onChange={(e) => setLastName(e.target.value)}
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
                    label="Email Address"
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                    invalid
                    validation="Please provide the E-mail"
                    pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
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
                    value={nic || ""}
                    onChange={(e) => setNic(e.target.value)}
                    invalid
                    validation="Please provide a valid NIC"
                    pattern="/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/"
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
                    value={phone || ""}
                    onChange={(e) => setPhone(e.target.value)}
                    invalid
                    validation="Please provide a valid phone number"
                    pattern="/^(?:0|94|\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/"
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
                    value={des || ""}
                    onChange={(e) => setDes(e.target.value)}
                    invalid
                    validation="Please provide the description"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="col-12 mt-4">
                <MDBBtn className="btn btn-success" style={{ width: "15%" }}>
                  Update
                </MDBBtn>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <Link to="/all_vols">
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

export default EditVol;
