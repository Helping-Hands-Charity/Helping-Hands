import React from "react";

const HomeView = () => {
  return (
    <div class="row" style={{ marginTop: "250px" }}>
      <div class="col-lg-12 col-md-12 col-12 col-sm-12">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-3 col-sm-3"></div>
          <div class="col-lg-6 col-md-6 col-6 col-sm-6">
            <div class="row" style={{ marginBottom: "20px" }}>
              <div class="col-lg-6 col-md-6 col-6 col-sm-6">
                <a href="/all_donors">
                  <div class="card" style={{ height: "5rem" }}>
                    <div class="card-body">
                      <p class="card-text">Donor Management</p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-6 col-md-6 col-6 col-sm-6">
                <a href="/all_donations">
                  <div class="card" style={{ height: "5rem" }}>
                    <div class="card-body">
                      <p class="card-text">Volunteer Management</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-6 col-6 col-sm-6">
                <div class="card">
                  <div class="card-body" style={{ height: "5rem" }}>
                    <p class="card-text">Donations Management</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-6 col-sm-6">
                <div class="card">
                  <div class="card-body" style={{ height: "5rem" }}>
                    <p class="card-text">Beneficiary Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-3 col-sm-3"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
