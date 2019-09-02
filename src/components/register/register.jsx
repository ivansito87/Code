import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import Form from "../common/form";
import Joi from "joi-browser";

class Register extends Form {

  state = {

    data: { username: "", password: "", name: "" },
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
    console.log("Subbmited");
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="m-auto mt-5">
            <MDBCard className="mt-5">
              <MDBCardBody>
                <form onSubmit={(e => this.handleSubmit(e))}>
                  <h5 className="h4 text-center py-4">
                    <MDBIcon icon="heart"/>&nbsp; Register: {this.state.data.username}
                  </h5>
                  {this.renderInput(1, "username", "Type your username/email", "envelope", "text", true)}
                  {this.renderInput(2, "password", "Type your Password", "lock", "password")}
                  {this.renderInput(3, "name", "Type your Name", "user", "text")}
                  {this.renderButton("Register")}
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