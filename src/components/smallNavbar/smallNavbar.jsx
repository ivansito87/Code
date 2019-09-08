import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBCol, MDBFormInline, MDBBtn, MDBNavLink, MDBNavbar, MDBCollapse, MDBNavbarNav } from
    "mdbreact";
import SearchBox from "../common/searchBox";

class SmallNavbar extends Component {
  state = {
    collapsed: false
  };

  handleNavbarClick = () => {
    this.setState({
      collapsed: false
    });
  };

  render() {
    return (
      <MDBCol md="12">
        <MDBNavbar color="deep-purple" className="font-weight-bold mb-4 text-white darken-3" dark expand="md">
          <MDBNavLink className="white-text" to="/movies">Movies</MDBNavLink>
          <MDBNavLink className="white-text" to="/customers">Customers</MDBNavLink>
          <MDBNavLink className="white-text" to="/movies/new">Add Movie</MDBNavLink>
          <MDBNavLink className="white-text" to="/login">Login</MDBNavLink>
          <MDBNavLink className="white-text" to="/register">Register</MDBNavLink>
          <Router>
            <MDBCollapse isOpen={this.state.collapsed} navbar>
              <MDBNavbarNav right onClick={this.handleNavbarClick}>
                <SearchBox handleSearch={this.props.handleSearch} />
                {/*<MDBFormInline className="md-form mr-auto m-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                  <MDBBtn outline color="white" size="sm" type="submit" className="mr-auto">
                    Search
                  </MDBBtn>
                </MDBFormInline>*/}
              </MDBNavbarNav>
            </MDBCollapse>
          </Router>
        </MDBNavbar>
      </MDBCol>
    );
  }
}

export default SmallNavbar;

