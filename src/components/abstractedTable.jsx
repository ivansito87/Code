import React, { Component } from 'react';
import { MDBBtn, MDBIcon, MDBTable, MDBTableBody } from "mdbreact";
import Like from "./buttons";
import TableHeader from "./tableHeader";

class AbstractedTable extends Component {

  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" }
  ];

  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;

    return (
      <MDBTable hover>
        <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
        <MDBTableBody>
          {movies.map((_movie) => <tr key={_movie._id}>
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