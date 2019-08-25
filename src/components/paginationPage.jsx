import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";
import _ from "lodash";  /* optimized version of underscore */
import PropTypes from "prop-types";

const PaginationPage = props => {

  const {itemsCount, pageSize, onPageChange, currentPage} = props;
  // console.log(currentPage);

  const pagesCount = Math.ceil(itemsCount / pageSize);
  // console.log(pagesCount);
  if (pagesCount === 1) return null;
  // using lodash to get pages from the current data this is useful to use built in methods
  // to achieve only 9 items displayed in the page at one time
  const pages = _.range(1, pagesCount + 1);

  return (
    <MDBPagination color="dark-grey" className="text-center mr-5">
      {pages.map(page => <MDBPageItem key={page} className={page === currentPage ? "active" : ""}>
        <MDBPageNav className="float-left m-3"
                    onClick={() => onPageChange(page)}
        > {page}
          <span className="sr-only">( current )</span>
        </MDBPageNav>
      </MDBPageItem>)}

    </MDBPagination>
  )
};

PaginationPage.propTypes = {

  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired

};

export default PaginationPage;