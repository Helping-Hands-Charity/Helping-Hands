import React from 'react';
import home from "../assets/homeView.jpg";

const HomeView = () => {
    return (
        <div class="col-lg-12 col-md-12 col-12 col-sm-12">
            <div className="image">
                <img src={home} alt="home image" style={{width:"100%", maxHeight:"700px" , opacity:"0.6", position:"absolute", top:"0",bottom:"0",left:"0",right:"0"}}/>
            </div>
            <div class="row" style={{ marginTop: "250px" }}>
                <div class="col-lg-12 col-md-12 col-12 col-sm-12">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-3 col-sm-3"></div>
                        <div class="col-lg-6 col-md-6 col-6 col-sm-6">
                            <div class="row" style={{ marginBottom: "20px" }}>
                                <div class="col-lg-6 col-md-6 col-6 col-sm-6">
                                    <a href='/all_donors'>
                                        <div class="card" style={{ height: "6rem", borderRadius:"25px" }}>
                                            <div class="card-body">
                                                <p class="card-text" style={{ fontSize: "25px" }}>Donor Management</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-6 col-md-6 col-6 col-sm-6">
                                    <a href='/all_vols'>
                                        <div class="card" style={{ height: "6rem", borderRadius:"25px" }}>
                                            <div class="card-body">
                                                <p class="card-text" style={{ fontSize: "25px" }}>Volunteer Management</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-6 col-sm-6">
                                    <div class="card" style={{  borderRadius:"25px" }}>
                                        <a href='/all_donations'>
                                            <div class="card-body" style={{ height: "6rem", borderRadius:"25px" }}>
                                                <p class="card-text" style={{ fontSize: "25px" }}>Donations Management</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-6 col-sm-6">
                                    <a href='/all_benes'>
                                        <div class="card" style={{  borderRadius:"25px" }}>
                                            <div class="card-body" style={{ height: "6rem"}}>
                                                <p class="card-text" style={{ fontSize: "25px" }}>Beneficiary Management</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-3 col-sm-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeView;


