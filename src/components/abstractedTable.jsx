import React, { Component } from 'react';
import { MDBBtn, MDBIcon, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import Like from "./buttons";

class AbstractedTable extends Component {

  raiseSort = path => {
    //=========== This is one way of doing it =================================================
    // although this works well is not the best way of doing it

    const sortColumn = {...this.props.sortColumn};
    if (sortColumn.path !== path) {
      sortColumn.path = path;
      sortColumn.order = "asc";
    } else {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    }

    this.props.onSort(sortColumn);

  };

  render() {
    const {movies, onDelete, onLike} = this.props;

    return (
      <MDBTable hover>
        <MDBTableHead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
            <th>Liked</th>
            <th>Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {movies.map((_movie, index) => <tr key={_movie._id}>
            <td>{_movie.title}</td>
            <td>{_movie.genre.name}</td>
            <td>{_movie.numberInStock}</td>
            <td>{_movie.dailyRentalRate}</td>
            <td><Like handleLike={(e) => onLike(e, _movie)} liked={_movie.liked}/></td>
            <td>
              <MDBBtn tag="a" floating gradient="peach"
                      onClick={(event) => onDelete(event, _movie._id)}>
                <MDBIcon icon="fas fa-times"/>
              </MDBBtn>
            </td>
          </tr>)}
        </MDBTableBody>
      </MDBTable>
    );
  }
}



export default AbstractedTable;