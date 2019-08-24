import React from "react";
import {MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol} from "mdbreact";

const JumbotronPage = (props) => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="bg-light text-dark black" >
            <h2 className="display-1 font-weight-bold my-5">Hello, Ivan!</h2>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-2"/>
            <p>
              It uses utility classes for typgraphy and spacing to space content out
              within the larger container.
            </p>
            <p className="lead">
              <MDBBtn floating gradient="purple" onClick={props.handleCount}>Increment Count</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
};

export default JumbotronPage;

