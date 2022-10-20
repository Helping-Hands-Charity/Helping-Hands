import React, { useState } from 'react'
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,

} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from '../redux/features/authSlice';
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";

const Header = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = user?.token;

  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
    }
  }

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <MDBNavbar fixed='top' expand="lg" style={{ backgroundColor: "#f0e6ea", height: "70px" }}>
      <MDBContainer>

        <MDBNavbarBrand
          href="/home"
          style={{ color: "#606080", fontWeight: "600", fontSize: "22px" }}>
          Helping Hands
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => setShow(!show)}
          style={{ color: "#606080" }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={show} navbar>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            {user?.result?._id && (
              <h5 style={{ marginRight: "30px", marginTop: "27px" }}>
                Logged in as: {user?.result?.name}</h5>
            )}
            {user?.result?._id && (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/home">
                    <p className="header-text">Dashboard</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </>
            )}
            {user?.result?._id ? (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">
                  <p className="header-text" onClick={handleLogout}> <i className="fas fa-sign-out"></i> &nbsp;Logout</p>
                </MDBNavbarLink>
              </MDBNavbarItem>

            ) : (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">
                  <p className="header-text"> <i className="fas fa-sign-in"></i> &nbsp;Login</p>
                </MDBNavbarLink>
                
              </MDBNavbarItem>
            )}

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Header