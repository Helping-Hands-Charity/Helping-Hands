import React from "react";
// import { MDBBtn } from "mdb-react-ui-kit";
import home from "../assets/landingPage.png";
import {Link} from "react-router-dom";


const HomeView = () => {


    return (
        <div className="col-12 col-md-12 col-sm-12 col-12">
            <div className="image">
                <img src={home} alt="home image" style={{width:"1525px", opacity:"0.6", position:"absolute", top:"0",bottom:"0",left:"0",right:"0"}}/>
            </div>
            <div className="col-12 col-md-12 col-sm-12 col-12" style={{marginTop:"150px"}}>
                <div className="row">
                <div className="col-6 col-md-6 col-sm-6 col-6"></div>
                    <div className="col-6 col-md-6 col-sm-6 col-6">
                        <div style={{fontSize:"40px", fontFamily:"sans-serif", position:"absolute", left:"60%"}}>
                            <p> Dare to reach out your hand </p>
                            <p> into the darkness, to pull </p>    
                            <p> another hand into the light...</p> 
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop:"300px"}}>
                    <div className="col-10 col-md-10 col-sm-10 col-10"></div>
                    <div className="col-2 col-md-2 col-sm-2 col-2">
                    <Link to="/login">
                        <button type="button" className="btn btn-outline-info"
                        style={{position:"absolute", left:"80%",cursor:"pointer", color:"black", borderRadius:"10px", width:"150px", height:"50px", fontSize:"16px", borderColor:"black"}}>
                        Get Started</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeView;


