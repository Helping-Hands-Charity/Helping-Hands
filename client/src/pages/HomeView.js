import React, { Fragment } from "react";
import { MDBBtn } from "mdb-react-ui-kit";


const HomeView = () => {
    return (
        <div style={{marginTop:"75px"}}>
            {/* Get started */}
            <p>Hello World</p>
            <Fragment>
                <MDBBtn color="primary" href="/login">Get Started</MDBBtn>
            </Fragment>
        </div>
    );
};

export default HomeView;


