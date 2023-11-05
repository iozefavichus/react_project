import { MouseEventHandler, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './pagination.module.css';

function Pagination({
  handleClick,
  next,
  previous,
}: {
  handleClick: () => void;
  next: null | number;
  previous: null | number;
}) {
  const { page, search, limit } = useParams();
  const [curPage, setCurPage] = useState(page);

  const handleBackClick: MouseEventHandler = (e) => {
    if (!previous) {
      e.preventDefault();
    } else {
      setCurPage(`${Number(curPage) - 1}`);
      handleClick();
    }
  };

  const handleForwardClick: MouseEventHandler = (e) => {
    if (!next) {
      e.preventDefault();
    } else {
      setCurPage(`${Number(curPage) + 1}`);
      handleClick();
    }
  };

  return (
    <section className={styles.pagination}>
      <Link
        to={`?search=${search}&page=${
          page === '1' ? page : Number(page) - 1
        }&limit=${limit}`}
        onClick={(e) => {
          handleBackClick(e);
        }}
      >
        PREVIOUS
      </Link>
      <div className={styles.page_number}>{curPage}</div>
      <Link
        to={`?search=${search}&page=${Number(page) + 1}&limit=${limit}`}
        onClick={(e) => {
          handleForwardClick(e);
        }}
      >
        NEXT
      </Link>
    </section>
  );
}
export default Pagination;
