import React from "react";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";


const SmallNavbar = () => (

  <MDBNav color="blue-gradient" className="font-weight-bold py-4 px-2 mb-4">
    <MDBNavLink className="white-text" to="/movies">Movies</MDBNavLink>
    <MDBNavLink className="white-text" to="/customers">Customers</MDBNavLink>
    <MDBNavLink className="white-text" to="/rentals">Rentals</MDBNavLink>
    <MDBNavLink className="white-text" to="/login">Login</MDBNavLink>
  </MDBNav>

);

export default SmallNavbar;

