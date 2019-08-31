import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
} from "mdbreact";
import Input from "../common/input";

class LoginForm extends Component {

  state = {
    username: "", // comes from the form input
    password: "",
    errors: {}

  };

  validate = () => {
    const errors = {};
    const { username, password } = this.state;
    if (username.trim() === "")
      errors.username = "Username is required";
    if (password.trim() === "")
      errors.password = "Password is required";
    this.setState({ errors });
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;
  };

  handleChange = (e) => {
    const username = e.target.value;
    const password = e.target.value;
    this.setState({ username, password }, () => {
      console.log(this.state.username);
      console.log(this.state.password);
    });
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
                    <MDBIcon icon="lock"/> Login: {this.state.username}
                  </h3>
                </MDBCardHeader>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  <Input
                    label={"Type your username"}
                    icon={"user"}
                    type={"text"}
                    name={"username"}
                    autofocus={true}
                    handleChange={this.handleChange}
                  />
                  <Input
                    label={"Type your password"}
                    icon={"lock"}
                    type={"password"}
                    name={"password"}
                    handleChange={this.handleChange}
                  />
                  <div className="text-center mt-4">
                    <MDBBtn
                      color="light-blue"
                      className="mb-3"
                      type="submit"
                    >
                      Login
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p>Not a member? Sign Up</p>
                    <p>Forgot Password?</p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default LoginForm;
