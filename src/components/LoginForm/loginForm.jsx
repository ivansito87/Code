import React, { Component } from 'react';
import Joi from "joi-browser";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
} from "mdbreact";
import Input from "../common/input";

class LoginForm extends Component {

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

  validate = () => {
    const options = { abortEarly: false };
    // using joi to validate the inputs from the user
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details)
      errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
  };

  // this validation is for both the user and or / password
  // and the form as a whole
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {

    // This is used to validate the form as it changes
    // we want to give immediate feedback to our user
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  render() {
    const { errors } = this.state;

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
                  <Input
                    label={"Type your username"}
                    icon={"user"}
                    type={"text"}
                    name={"username"}
                    autofocus={true}
                    handleChange={this.handleChange}
                    error={errors.username}
                  />
                  <Input
                    label={"Type your password"}
                    icon={"lock"}
                    type={"password"}
                    name={"password"}
                    handleChange={this.handleChange}
                    error={errors.password}
                  />
                  <div className="text-center mt-4">
                    <MDBBtn
                      /* to get this button disabled we pass the function that we wrote
                      since the function returns null or {} empty object we can set the button
                      depending on the return `{} === truthy and null === falsy`  */
                      disabled={this.validate()}
                      color="light-blue"
                      className="mb-3"
                      type="submit"
                    >
                      Login
                    </MDBBtn>
                  </div>
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
