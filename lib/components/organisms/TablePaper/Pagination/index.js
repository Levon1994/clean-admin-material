import React from 'react';
import ReactPaginate from 'react-paginate';

import {
  Icon,
  Paper
} from 'components';

import './style.scss';

const Pagination = ({
 count,
 maxCount,
 darkMode,
 initialPage,
 onPageChange,
}) => {

  return (
    <section>
      <Paper flexName='flexible jCenter aCenter' >
        <ReactPaginate
          initialPage={Number(initialPage) - 1}
          previousLabel={<Icon className="prevPage icon-feather-chevron-left" />}
          nextLabel={<Icon className="nextPage icon-feather-chevron-right"/>}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(count/(maxCount || 9))}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={({ selected }) => onPageChange(selected + 1)}
          containerClassName="pagination flexible"
          subContainerClassName="pages pagination"
          activeClassName="current"
          disableInitialCallback={true}
        />
      </Paper>
    </section>
  )
}

export default Pagination;
