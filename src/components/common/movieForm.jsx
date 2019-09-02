import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Form from "./form";

class MovieForm extends Form {

  render() {

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="m-auto mt-4">
            <form className="mt-5">
              <p className="h5 text-center mx-5">Add new movie</p>
              <div className="dark-ic">
                <MDBInput
                  label="Title"
                  icon="video"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Genre"
                  icon="venus-mars"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Number in stock"
                  icon="mouse-pointer"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Rate"
                  icon="star"
                  group
                  type="text"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn color="primary">Register</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MovieForm;

/*
import React from 'react';
import { MDBBtn } from "mdbreact";

const MovieForm = ({ match, history }) => (
  <div>
    <h1>Hello Form! {match.params.id}</h1>
    <MDBBtn
      className="purple-gradient"
      onClick={() => history.push("/movies")}
    >Go Back</MDBBtn>
  </div>
);

export default MovieForm;*/
