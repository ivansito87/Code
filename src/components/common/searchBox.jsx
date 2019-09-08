import React from 'react';
import { MDBBtn, MDBFormInline } from "mdbreact";

const SearchBox = props => (
  <MDBFormInline className="md-form mr-auto m-0">
    <input
      className="form-control mr-sm-2"
      type="text" placeholder="Search..."
      aria-label="Search"
      onChange={e => (e.currentTarget.value)}
    />
    <MDBBtn
      outline color="white"
      size="sm"
      className="mr-auto"
      onSubmit={props.handleSearch}
    >
      Search
    </MDBBtn>
  </MDBFormInline>
);

export default SearchBox;