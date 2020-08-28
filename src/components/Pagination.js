import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        <li className='pageItem'>
          {currentPage === 1 ? (
            <span className='pageLink pageLinkDisabled'>&laquo;</span>
          ) : (
            <Link
              className='pageLink'
              onClick={() => paginate(currentPage - 1)}
              to={`/onas/aktuality/strana/${currentPage - 1}`}
            >
              &laquo;
            </Link>
          )}
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className='pageItem'>
            <Link
              onClick={() => paginate(number)}
              to={`/onas/aktuality/strana/${number}`}
              className={
                number === currentPage ? 'pageLink pageLinkActive' : 'pageLink'
              }
            >
              {number}
            </Link>
          </li>
        ))}
        <li className='pageItem'>
          {currentPage === pageNumbers.length ? (
            <span className='pageLink pageLinkDisabled'>&raquo;</span>
          ) : (
            <Link
              className='pageLink'
              onClick={() => paginate(currentPage + 1)}
              to={`/onas/aktuality/strana/${currentPage + 1}`}
            >
              &raquo;
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
