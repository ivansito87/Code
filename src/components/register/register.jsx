import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Form from "../common/form";
import Joi from "joi-browser";

class Register extends Form {

state = {

  data: {username: "", password: "", name: ""},
  errors: {}

};

schema = {
  username: Joi.string()
    .required()
    .email()
    .label("Username"),
  password: Joi.string()
    .required()
    .min(5)
    .label("Password"),
  name: Joi.string()
    .required()
    .label("Name")
};

doSubmit = () => {

  // Call the server
  console.log("subbmited");
};

render() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="m-auto mt-5">
        <MDBCard className="mt-5">
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="secondary" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );

};
}

export default Register;