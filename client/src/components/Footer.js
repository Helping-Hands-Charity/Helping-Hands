import React from "react";
import { MDBContainer, MDBFooter } from "mdb-react-ui-kit";

const FooterPage = () => {
    return (
        <div className="col-12 col-md-12 col-sm-12 col-12">
            <MDBFooter className="font-small pt-2 pb-2" style={{ backgroundColor: '#f0e6ea', position: "fixed", width: "100%", bottom: "0" }}>
                <div className="footer-copyright text-center">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Helping Hands </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );
}

export default FooterPage;