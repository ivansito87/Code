import React from "react";
import {MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn} from "mdbreact";

const TeamPage = () => {
  return (
    <MDBCard className="my-5 px-1 pb-5 text-center">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold my-5">
          Our amazing team
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol md="4" className="mb-md-0 mb-5">

            <h4 className="font-weight-bold dark-grey-text my-4">
              Maria Kate
            </h4>
            <h6 className="text-uppercase grey-text mb-3">Photographer</h6>
            <MDBBtn className="sunny-morning-gradient" color="warning-color-darker" size="sm">Increment</MDBBtn>
            <MDBBtn className="amy-crisp-gradient" color="success-color-darker" size="sm">Decrement</MDBBtn>
          </MDBCol>
          <MDBCol md="4" className="mb-md-0 mb-5">
            <h4 className="font-weight-bold dark-grey-text my-4">John Doe</h4>
            <h6 className="text-uppercase grey-text mb-3">
              Front-end Developer
            </h6>
            <MDBBtn className="sunny-morning-gradient" color="warning-color-darker" size="sm">Increment</MDBBtn>
            <MDBBtn className="amy-crisp-gradient" color="success-color-darker" size="sm">Decrement</MDBBtn>
          </MDBCol>

          <MDBCol md="4" className="mb-md-0 mb-5">

            <h4 className="font-weight-bold dark-grey-text my-4">
              Sarah Melyah
            </h4>
            <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
            <MDBBtn className="sunny-morning-gradient" color="warning-color-darker" size="sm">Increment</MDBBtn>
            <MDBBtn className="amy-crisp-gradient" color="success-color-darker" size="sm">Decrement</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default TeamPage;