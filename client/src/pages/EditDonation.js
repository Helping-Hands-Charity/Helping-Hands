import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBCardHeader, MDBValidation } from "mdb-react-ui-kit";
import {toast} from "react-toastify";
import {useNavigate, useParams, Link} from "react-router-dom";


const EditDonation = () => {

    const {id} = useParams();

    const [item,setItem] = useState('');
    const [type,setType] = useState('');
    const [date,setDate] = useState('');
    const [org,setOrg] = useState('');
    const [amount,setAmount] = useState('');
    const [des,setDes] = useState('');

    useEffect(() => {
        if(id){
            axios.get("http://localhost:5000/donations/" + id).then((res) => {
                console.log(res.data);
                setItem(res.data.item);
                setType(res.data.type);
                setDate(res.data.date);
                setOrg(res.data.org);
                setAmount(res.data.amount);
                setDes(res.data.des);
            })
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const donation = await axios.patch('http://localhost:5000/donations/' + id,{
              item:item,
              type:type,
              date:date,
              org:org,
              amount:amount,
              des:des
      
            });
            window.location.replace("/all_donations")
            console.log(donation.data);
      
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
                        <MDBBtn color="secondary" href={"/all_donations"} style={{ float: 'left' }}> <i class="fas fa-home"></i> &nbsp;Donation Dashboard</MDBBtn>
                    </div> 
                </div>
            </div>  

            <div style={{ margin: "auto", padding: "15px", maxWidth: "750px", alignContent: "center", marginTop: "10px", }}>
                <MDBCard alignment="center">
                    <MDBCardHeader>
                        <h4 style={{ fontWeight: 'bold' }}>Update Donation</h4>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBValidation className='add_form' onSubmit={handleSubmit} noValidate>
                            <div className="row justify-content-center">
                                <div className=" col-md-5">
                                    <MDBInput
                                        label="Item" 
                                        type="text"
                                        className="form-control"
                                        name="item"
                                        id="item"
                                        value={item || ''}
                                        onChange = {(e) =>setItem(e.target.value)}
                                        invalid 
                                        validation="Please provide the item"
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                                <div className="col col-md-5">
                                    <MDBInput
                                        label="Type"
                                        type="text"
                                        className="form-control"
                                        name="type"
                                        id="type"
                                        value={type || ''}
                                        onChange = {(e) =>setType(e.target.value)}
                                        invalid 
                                        validation="Please provide the type"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            &nbsp;
                            <div className="row justify-content-center">
                                <div className="col col-md-5">
                                    <MDBInput
                                        label="Date"
                                        type="date"
                                        className="form-control"
                                        name="date"
                                        id="date"
                                        value={date || ''} 
                                        onChange = {(e) =>setDate(e.target.value)}
                                        invalid 
                                        validation="Please provide the date"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="col col-md-5">
                                    <MDBInput
                                        label="Amount"
                                        type="number"
                                        className="form-control"
                                        name="amount"
                                        id="amount"
                                        value={amount || ''}
                                        onChange = {(e) =>setAmount(e.target.value)}
                                        invalid 
                                        validation="Please provide the amount"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            &nbsp;
                            <div className="row  justify-content-center">
                              <div className="col col-md-10">
                                  <MDBInput
                                      label="Organization"
                                      type="text"
                                      className="form-control"
                                      name="org"
                                      id="org"
                                      value={org || ''}
                                      onChange = {(e) =>setOrg(e.target.value)}
                                      invalid 
                                      validation="Please provide the organization"
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
                                        value={des || ''}
                                        onChange = {(e) =>setDes(e.target.value)}
                                        invalid 
                                        validation="Please provide the description"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                           
                            <div className="col-12 mt-4">
                                <MDBBtn className="btn btn-success" style={{width:"15%"}}>Update</MDBBtn>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <Link to="/all_donations">
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

export default EditDonation