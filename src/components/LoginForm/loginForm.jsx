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
  MDBInput
} from "mdbreact";

class LoginForm extends Component {

  state = {
    name: "Ivan",
    username: "" // comes from the form input
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
  };

  handleChange = (e) => {
    this.setState({username: e.target.value}, () => {
      console.log(this.state.username);})
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
                <form onSubmit={(e) => this.handleSubmit(e)} >
                  <div className="grey-text">
                    <MDBInput
                      autoFocus // this is used to auto focus the cursor when the component is render
                      label="Type your username"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>

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
