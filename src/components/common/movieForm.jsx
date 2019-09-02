
import React from 'react';
import { MDBBtn } from "mdbreact";

const MovieForm = ({ match, history }) => (
  <div>
    <h1>Hello Form! {match.params.id}</h1>  // this is used to match the para
    <MDBBtn
      className="purple-gradient"
      onClick={() => history.push("/movies")}
    >Go Back</MDBBtn>
  </div>
);

export default MovieForm;
