import React, { Component } from 'react';
import { MDBBtn, MDBIcon, MDBTable, MDBNavLink } from "mdbreact";
import Like from "./buttons";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class AbstractedTable extends Component {

  columns = [
    { path: "title", label: "Title", content: movie => <MDBNavLink color="unique" className="deep-purple-text" to={`/movies/${movie._id}`}>{movie.title}</MDBNavLink>},
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      label: "Like",
      content: _movie => <Like handleLike={(e) => this.props.onLike(e, _movie)} liked={_movie.liked}/>
    },
    {
      key: "delete",
      label: "Delete",
      content:_movie => <MDBBtn tag="a" floating gradient="peach"
                       onClick={(event) => this.props.onDelete(event, _movie._id)}>
        <MDBIcon icon="fas fa-times"/>
      </MDBBtn>
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <MDBTable hover>
        <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
        <TableBody columns={this.columns} data={movies}/>
        {/*<MDBTableBody>
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
        </MDBTableBody>*/}
      </MDBTable>
    );
  }
}


export default AbstractedTable;