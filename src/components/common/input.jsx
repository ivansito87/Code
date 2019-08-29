import React from 'react';
import { MDBInput } from "mdbreact";

const Input = ({ handleChange, name, label, icon, type, autofocus }) => (
  <div className="grey-text">
    <MDBInput
      autoFocus={autofocus} // this is used to auto focus the cursor when the component is render
      label={label}
      icon={icon}
      group
      type={type}
      validate
      error="wrong"
      success="right"
      onChange={handleChange}
      name={name}
    />
  </div>
);

export default Input;