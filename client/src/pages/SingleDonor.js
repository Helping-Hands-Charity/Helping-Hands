import React, { useEffect } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useParams} from "react-router-dom";
import { getDonor } from '../redux/features/donorSlice';

const SingleDonor = ({_id}) => {

  const dispatch = useDispatch();
  const { donor } = useSelector((state) => ({ ...state.donor }));
  const { id } = useParams();


  useEffect(() => {

    if (id) {
      dispatch(getDonor(id));
    }
  }, [id]);

  return (
    <div
      style={{
        marginTop: "80px",
        padding: "15px",
        maxWidth: "1000px",
        alignContent: "center",
      }}
    >
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12 col-sm-12">
          <div className="col-lg-10 col-md-10 col-10 col-sm-10">
            <MDBCol>
              <MDBCard style={{ width: "80%", height: "450px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                <MDBCardBody>
                  <MDBCardTitle></MDBCardTitle>
                  <div className="row" style={{marginBottom:"30px"}}>
                    <div className="col-lg-8 col-md-8 col-8 col-sm-8"></div>
                    <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                      <MDBBtn color="secondary"  href={'/all_donors'}><i className="fas fa-home"></i> Donor Dashbord</MDBBtn>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p><b>First Name :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left"}}>{donor.firstName}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p><b>Last Name :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left"}}>{donor.lastName}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p><b>NIC No :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left"}}>{donor.nic}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p><b>Home Address :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left"}}>{donor.address}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p><b>E-mail :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left"}}>{donor.email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-4 col-sm-4">
                        <p><b>Phone Number :</b></p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-6 col-sm-6">
                        <p style={{float:"left"}}>{donor.phone}</p>
                      </div>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
          <div className="col-lg-2 col-md-2 col-2 col-sm-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleDonor;
