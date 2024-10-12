import React from "react";
import styles from "./Pagination.module.css";
const Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  if (props.currentPage >= 4 && props.currentPage <= pagesCount - 3) {
    pages = [];
    for (let i = props.currentPage - 1; i > props.currentPage - 4; i--) {
      pages.push(i);
    }
    pages.reverse();
    pages.push(props.currentPage);
    for (let i = props.currentPage + 1; i < props.currentPage + 4; i++) {
      pages.push(i);
    }
  } else if (props.pagesCount <= 4) {
    pages = [1, 2, 3, 4];
  } else if (props.currentPage >= pagesCount - 4) {
    pages = [pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount];
  } else {
    pages = [1, 2, 3, 4];
  }

  if (props.currentPage >= 6) {
    pages.unshift(1, "...");
  }

  if (props.currentPage <= pagesCount - 5) {
    pages.push("...", pagesCount);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            key={p}
            onClick={() => {
              props.onPageChanged(p);
            }}
            className={
              props.currentPage === p ? styles.selectedPage : styles.pageNumber
            }
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
