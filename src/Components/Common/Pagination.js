import React from 'react';
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange, previousPage, nextPage }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);



    return (
        <div className="pagination-block mx-auto">
            <nav aria-label="Page navigation example" >

                <ul className="pagination pagination-circle pg-blue">
                    <li className="page-item  ">
                        <button className={currentPage === 1 ? "page-link prevnext disabled" : "page-link prevnext"} aria-label="Previous" onClick={previousPage}>
                            {/* <span aria-hidden="true">&laquo;</span> */}
                            <span className="">Previous</span>
                        </button>
                    </li>  {pages.map(page => (
                        <li className={page === currentPage ? "page-item active" : "page-item"}>
                            <button className="page-link" onClick={() => onPageChange(page)}>{page}</button></li>
                    ))}
                    <li className="page-item">
                        <button className={currentPage === pagesCount ? "page-link prevnext disabled" : "page-link prevnext"} aria-label="Next" onClick={nextPage}>
                            {/* <span aria-hidden="true">&raquo;</span> */}
                            <span className="">Next</span>
                        </button>
                    </li>
                </ul>


            </nav>
        </div>
    )
}

// #endregion

export default Pagination;