import React, { useState, useEffect } from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import {
  getVolunteers,
  deleteVolunteer,
  searchVolunteers,
} from "../redux/features/volSlice";
import { toast } from "react-toastify";
import jspdf from "jspdf";
import "jspdf-autotable";
import { useNavigate } from "react-router-dom";

const DonorDashboard = ({
  title,
  firstName,
  lastName,
  nic,
  _id,
  email,
  des,
  phone,
  imgFile,
}) => {
  const { volunteers, loading } = useSelector((state) => ({
    ...state.volunteer,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getVolunteers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this volunteer?")) {
      dispatch(deleteVolunteer({ id, toast }));
    }
  };

  function generatePDF(vItems) {
    const doc = new jspdf();

    const tableColumn = [
      "Title",
      "First Name",
      "Last Name",
      "Email Address",
      "NIC",
      "Phone Number",
      "Description",
    ];

    const tableRows = [];

    vItems
      .slice(0)
      .reverse()
      .map((vItem) => {
        const volunteerData = [
          vItem.title,

          vItem.firstName,

          vItem.lastName,

          vItem.email,

          vItem.nic,

          vItem.phone,

          vItem.des,
        ];

        tableRows.push(volunteerData);
      });

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });

    const date = Date().split(" ");

    const dateStr = date[1] + "-" + date[2] + "-" + date[3];

    doc.text("Volunteer-Details-Report", 14, 15).setFontSize(12);

    doc.text(`Report Generated Date - ${dateStr} `, 14, 23);

    doc.save(`VOLUNTEERS-Report_${dateStr}.pdf`);
  }

  const handleChange = (e) => {
    e.preventDefault();
    if (search) {
      console.log("search");
      dispatch(searchVolunteers(search));
      navigate(`/all_vols/search?searchQuery=${search}`);
      setSearch("");
    } else {
      navigate("/all_vols");
    }
  };

  return (
    <div className="container">
      <div
        className="col-12 col-md-12 col-sm-12 col-12"
        style={{ marginTop: "100px" }}
      >
        <div className="row">
          <div className="col-2 col-md-2 col-sm-2 col-2">
            <button
              type="button"
              className="btn btn-outline-info"
              id="pdfButton"
              onClick={(e) => {
                generatePDF(volunteers);
              }}
            >
              <i className="fa fa-file-pdf"></i>&nbsp;&nbsp;Download Report
            </button>
          </div>
          <div className="col-2 col-md-2 col-sm-2 col-2">
            <MDBBtn color="success" href={"/add_vol"} style={{ float: "left" }}>
              <i className="fas fa-plus"></i>&nbsp; Create Volunteer
            </MDBBtn>
          </div>
          <div className="col-5 col-md-5 col-sm-5 col-5"></div>
          <div className="col-3 col-md-3 col-sm-3 col-3">
            <form className="d-flex input-group w-auto" onSubmit={handleChange}>
              <input
                type="text"
                className="form-control"
                placeholder="Search Volunteer"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div
                data-testid="test-1"
                style={{ marginTop: "5px", marginLeft: "5px" }}
              >
                <MDBIcon fas icon="search" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div style={{ marginTop: "10px" }}>
          <table
            className="table table-striped"
            style={{ marginTop: "15px", marginBottom: "85px" }}
          >
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">NIC</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {volunteers &&
                volunteers.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.nic}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <MDBBtn color="secondary" href={`/edit_vol/${item._id}`}>
                        &nbsp; <i className="fas fa-edit"></i>&nbsp;
                      </MDBBtn>
                      &nbsp;
                      <MDBBtn
                        color="danger"
                        onClick={() => handleDelete(item._id)}
                      >
                        <i className="fas fa-trash-alt"></i>&nbsp;
                      </MDBBtn>
                      &nbsp;
                      <MDBBtn color="info" href={`/volunteer/${item._id}`}>
                        <i className="fas fa-eye"></i>&nbsp;
                      </MDBBtn>
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

export default DonorDashboard;
