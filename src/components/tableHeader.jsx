import React, { Component } from 'react';
import { MDBTableHead } from "mdbreact";

class TableHeader extends Component {


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
    return (
      <MDBTableHead>
        <tr>
          {this.props.columns.map(column =>
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
            </th>
          )}

          {/* <th onClick={() => this.raiseSort("title")}>Title</th>
          <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
          <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
          <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
          <th>Liked</th>
          <th>Delete</th>*/}
        </tr>
      </MDBTableHead>
    );
  }
}


export default TableHeader;
