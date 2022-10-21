import React, { useState,useEffect } from 'react';
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../components/Spinner';
import { getDonations, deleteDonation, searchDonations } from '../redux/features/donationSlice';
import {toast} from "react-toastify";
import jspdf from 'jspdf';
import "jspdf-autotable";
import {useNavigate} from "react-router-dom";



const DonationDashboard = ({ title, type, date, _id, des, org, amount }) => {

    const { donations, loading } = useSelector((state) => ({ ...state.donation }))
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(getDonations());
    }, []);

    if (loading) {
        return <Spinner />;
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this donation?")) {
            dispatch(deleteDonation({ id, toast }));
        }
    };


    function generatePDF(dnItems) {

        const doc = new jspdf();

        const tableColumn = ["Item", "Type", "Date", "Organization","Amount","Description"];

        const tableRows = [];



        dnItems.slice(0).reverse().map(dnItem => {

            const donationData = [

                dnItem.item,

                dnItem.type,

                dnItem.date,

                dnItem.org,

                dnItem.amount,

                dnItem.des

            ];

            tableRows.push(donationData);

        });



        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35 });

        const date = Date().split(" ");

        const dateStr = date[1] + "-" + date[2] + "-" + date[3];

        doc.text("Donation-Details-Report", 14, 15).setFontSize(12);

        doc.text(`Report Generated Date - ${dateStr} `, 14, 23);

        doc.save(`DONATIONS-Details-Report_${dateStr}.pdf`);

    }

    const handleChange= (e)=>{
        e.preventDefault();
        if(search){
            console.log("search");
          dispatch(searchDonations(search));
          navigate(`/all_donations/search?searchQuery=${search}`);
          setSearch("");
        }else{
            console.log("else");
          navigate("/all_donations");
        }
      }



    return (
        <div className="container">
            <div className="col-12 col-md-12 col-sm-12 col-12" style={{ marginTop: "100px" }}>
                <div className="row">
                    <div className="col-2 col-md-2 col-sm-2 col-2">
                        <button type="button" className="btn btn-outline-info" id="pdfButton" onClick={(e) => { generatePDF(donations) }}><i className="fa fa-file-pdf"></i>&nbsp;&nbsp;Download Report</button>
                    </div>
                    <div className="col-2 col-md-2 col-sm-2 col-2">
                        <MDBBtn color="success" href={"/add_donation"} style={{ float: 'left' }}><i className="fas fa-plus"></i>&nbsp; Create Donation</MDBBtn>
                    </div>
                    <div className="col-5 col-md-5 col-sm-5 col-5">
                    </div>
                    <div className="col-3 col-md-3 col-sm-3 col-3">
                        <form className='d-flex input-group w-auto'  onSubmit={handleChange}>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Search Donation'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <div data-testid="test-1" style={{marginTop:"5px", marginLeft: "5px"}}>
                            <MDBIcon fas icon='search'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="row">
                <div style={{ marginTop: "10px" }}>
                    <table className="table table-striped" style={{ marginTop: '15px', marginBottom:"85px" }}>
                        <thead>
                            <tr >
                                <th scope="col" style={{width:"10%"}}>No</th>
                                <th scope="col">Item</th>
                                <th scope="col">Type</th>
                                <th scope="col">Date</th>
                                <th scope="col">Organization</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donations && donations.map((item, index) => (
                                <tr key={index}>
                                     <th scope="row">{index+1}</th>
                                    <td>{item.item}</td>
                                    <td>{item.type}</td>
                                    <td>{item.date}</td>
                                    <td>{item.org}</td>
                                    <td>{item.amount}</td>
                                    <td>
                                        <MDBBtn color="secondary" href={`/edit_donation/${item._id}`}>&nbsp; <i className="fas fa-edit"></i>&nbsp;</MDBBtn>
                                        &nbsp;
                                        <MDBBtn color="danger" onClick={() => handleDelete(item._id)}><i className="fas fa-trash-alt"></i>&nbsp;</MDBBtn>
                                        &nbsp;
                                        <MDBBtn color="info" href={`/donation/${item._id}`}><i className="fas fa-eye"></i>&nbsp;</MDBBtn>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DonationDashboard;