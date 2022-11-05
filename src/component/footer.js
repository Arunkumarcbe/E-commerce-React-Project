import React from 'react'
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import "../style/footer.css"
function footer() {
  return (
    <div><MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a' }} id="footer">
    <MDBContainer className='p-4'id="f-footer"></MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2022 Copyright:
      <a className='text-white' href='#' id="cp">Arunkumar.s 
      </a>
    </div>
  </MDBFooter></div>
  )
}

export default footer