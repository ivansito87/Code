import React from "react";
import { MDBNav, MDBNavLink } from "mdbreact";


const SmallNavbar = () => (

  <MDBNav color="blue-gradient" className="font-weight-bold py-4 px-2 mb-4">
    <MDBNavLink className="white-text" to="/movies">Movies</MDBNavLink>
    <MDBNavLink className="white-text" to="/customers">Customers</MDBNavLink>
    <MDBNavLink className="white-text" to="/movies/new">Add Movie</MDBNavLink>
    <MDBNavLink className="white-text" to="/login">Login</MDBNavLink>
    <MDBNavLink className="white-text" to="/register">Register</MDBNavLink>
  </MDBNav>

);

export default SmallNavbar;

