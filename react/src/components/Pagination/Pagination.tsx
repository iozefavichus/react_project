import { MouseEventHandler, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './pagination.module.css';

function Pagination({
  handleClick,
  next,
  previous,
}: {
  handleClick: () => void;
  next: null | string;
  previous: null | string;
}) {
  const { page, search } = useParams();
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
        to={`/${search}/${page === '1' ? page : Number(page) - 1}`}
        onClick={(e) => {
          handleBackClick(e);
        }}
      >
        PREVIOUS
      </Link>
      <div className={styles.page_number}>2</div>
      <Link
        to={`/${search}/${Number(page) + 1}`}
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
