import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBtn } from "mdbreact";
import "./style.css";

const MyListGroup = props => {
  return (
    <MDBContainer>
      <MDBListGroup className="mx-auto">
        <MDBListGroupItem color="warning" href="" className="cloudy-knoxville-gradient" hover>All Genres</MDBListGroupItem>
        <MDBListGroupItem color="light" href="" className="" hover>Action</MDBListGroupItem>
        <MDBListGroupItem color="light" href="" hover>Comedy</MDBListGroupItem>
        <MDBListGroupItem color="light" href="" hover>Thriller</MDBListGroupItem>
      </MDBListGroup>
    </MDBContainer>

  );
};

export default MyListGroup;