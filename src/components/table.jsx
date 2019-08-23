import React, {Component} from 'react';
import {MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
import "./fakeMovieService";

class TablePage extends Component {

  state = {};

  render() {
    return (
      <MDBCard narrow>
        <MDBCardHeader
          className="view view-cascade gradient-card-header purple-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
          <div>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fa fa-th-large mt-0">{" "}</i>
            </MDBBtn>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fa fa-columns mt-0">{" "}</i>
            </MDBBtn>
          </div>
          <a href="#" className="white-text mx-3">Table name</a>
          <div>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fas fa-pencil-alt mt-0">{" "}</i>
            </MDBBtn>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fas fa-times mt-0">{" "}</i>
            </MDBBtn>
            <MDBBtn outline rounded size="sm" color="white" className="px-2">
              <i className="fa fa-info-circle mt-0">{" "}</i>
            </MDBBtn>
          </div>
        </MDBCardHeader>
        <MDBCardBody cascade className="elevation-demo-surface">
          <MDBTable hover>
            <MDBTableHead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Handle</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default TablePage;