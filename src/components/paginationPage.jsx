import React from "react";
import {MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";
import _ from "lodash";  /* optimized version of underscore */

const PaginationPage = props => {

  const {itemsCount, pageSize, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  console.log(pagesCount);
  const pages = _.range(1, pagesCount + 1);

  return (
    <MDBRow>
      <MDBCol>
        <MDBPagination square className="float-right mr-5">

          {pages.map(page => <MDBPageItem active>
            <MDBPageNav key={page} className="page-link m-3 z-depth-1-half">
              {page} <span onClick={() => onPageChange(page)}>{" "}</span> {/* :TODO turn to current */}
            </MDBPageNav>
          </MDBPageItem>)}
        </MDBPagination>
      </MDBCol>
    </MDBRow>
  )
};

export default PaginationPage;