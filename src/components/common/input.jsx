import React from 'react';
import { MDBInput } from "mdbreact";

const Input = ({ name, label, error, autofocus, handleChange, ...rest }) => (
  <div className="grey-text dark-ic">
    <MDBInput
      {...rest}
      name={name}
      onChange={handleChange}
      autoFocus={autofocus}
      label={label}
      group
      validate
      error="true"
      success="right"
    />
    {error && <p className="text-danger">{error}</p>}
  </div>
);

export default Input;