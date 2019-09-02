import React, { Component } from 'react';
import Joi from "joi-browser";
import { MDBBtn } from "mdbreact";
import Input from "./input";

class Form extends Component {

  state = {
    data: {},
    errors: {}
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

  // this validation is for both the user and or / password
  // and the form as a whole
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;
    this.doSubmit();
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

  renderButton(label) {
    return (
      <div className="text-center mt-4">
        <MDBBtn
          outline={!this.validate()}
          /* to get this button disabled we pass the function that we wrote
          since the function returns null or {} empty object we can set the button
          depending on the return `{} === truthy and null === falsy`  */
          disabled={this.validate()}
          color={!this.validate() && "success"}
          className="my-4 mx-auto text-center"
          type="submit"
        >
          {label}
        </MDBBtn>
      </div>
    );
  }

  renderInput(id, name, label, icon, type, autofocus = false) {

    const { errors, data } = this.state;

    return (
      <Input
        id={id}
        autofocus={autofocus}
        label={label}
        icon={icon}
        value={data[name]}
        type={type}
        name={name}
        handleChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

}

export default Form;
