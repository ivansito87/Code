import React, { Component } from 'react';
import { MDBTableHead, MDBIcon, MDBPageItem, MDBPageNav, MDBPagination } from "mdbreact";

class TableHeader extends Component {


  raiseSort = path => {
    //=========== This is one way of doing it =================================================
    // although this works well is not the best way of doing it

    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path !== path) {
      sortColumn.path = path;
      sortColumn.order = "asc";
    } else {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    }

    this.props.onSort(sortColumn);

  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <MDBIcon icon="angle-up"/>;
    return <MDBIcon icon="angle-down"/>;
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
              <MDBPagination>
                <MDBPageItem>
                  <MDBPageNav aria-label={column.label}>
                    <span aria-hidden="true">{column.label} {this.renderSortIcon(column)}</span>
                  </MDBPageNav>
                </MDBPageItem>
              </MDBPagination>
            </th>
          )}
        </tr>
      </MDBTableHead>
    );
  }
}


export default TableHeader;
