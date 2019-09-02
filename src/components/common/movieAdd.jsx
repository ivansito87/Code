import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Form from "./form";

class MovieForm extends Form {

  render() {
    const { history } = this.props;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="m-auto mt-4">
              <p className="h5 text-center mt-5">Add new movie</p>
            <form className="mt-5">
              {this.renderInput(1, "title", "Title", "video", "text", true)}
              {this.renderInput(2, "genre", "Genre", "venus-mars", "text")}
              {this.renderInput(3, "numberInStock", "Number in stock", "mouse-pointer", "text")}
              {this.renderInput(4, "rate", "Rate", "star", "text")}
              <div className="text-center">
                <MDBBtn
                  className="warm-flame-gradient"
                  onClick={() => history.push("/movies")}
                >Cancel</MDBBtn>
                <MDBBtn className="young-passion-gradient">Register</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MovieForm;
