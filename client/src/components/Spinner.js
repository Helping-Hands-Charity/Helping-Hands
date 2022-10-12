import React from 'react'
import {MDBSpinner} from "mdb-react-ui-kit";

const Spinner = () => {
  return (
    <MDBSpinner className='me-2' style={{width: "3rem", height: "3rem", marginTop:"100px"}}>
        <div className='visually-hidden'>Loading...</div>

    </MDBSpinner>
  )
}

export default Spinner