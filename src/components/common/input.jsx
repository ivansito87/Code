import React from 'react';
import { MDBInput } from "mdbreact";

const Input = ({ handleChange, name, label, icon, type, autofocus, error }) => (
  <div className="grey-text">
    <MDBInput
      autoFocus={autofocus} // this is used to auto focus the cursor when the component is render
      label={label}
      icon={icon}
      group
      type={type}
      validate
      error="true"
      success="right"
      onChange={handleChange}
      name={name}
    />
    {error && <p>
      <p className="text-danger">{error}</p>
    </p>}
  </div>
);

export default Input;