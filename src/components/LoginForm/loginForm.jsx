import React from 'react';
import Joi from "joi-browser";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
} from "mdbreact";
import Form from "../common/form";

class LoginForm extends Form {

  state = {
    data: { username: "", password: "" },
    /* username: "", // comes from the form input
     password: "",*/
    errors: {}

  };
  // Using lbrary Joi for validation in forms check it out here https://www.npmjs.com/package/@hapi/joi
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // do stuff here
    console.log("Submitted");
  };

  render() {

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="m-auto mt-5">
            <MDBCard className="mt-5">
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock"/> Hello: {this.state.data.username}
                  </h3>
                </MDBCardHeader>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  {this.renderInput(1,"username", "Type your username", "user","text", true)}
                  {this.renderInput(2,"password", "Type your password", "lock", "password")}
                  {this.renderButton("Login")}
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default LoginForm;
