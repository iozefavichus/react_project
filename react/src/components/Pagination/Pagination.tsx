import { MouseEventHandler } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './pagination.module.css';

type MyProps = {
  search: string;
  page: number;
  limit: number;
};

function Pagination(props: MyProps) {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const paramSearch = searchParams.get('search');
  const paramPage = Number(searchParams.get('skip')) / 10 + 1;
  const paramLimit = searchParams.get('limit');

  const skip = (paramPage: number): number => {
    let result;
    if (paramPage) {
      result = paramPage * 10;
    } else {
      result = 0;
    }
    return result;
  };

  const handleBackClick: MouseEventHandler = (e) => {
    if (paramPage == 1) {
      e.preventDefault();
    } else if (paramPage == 2) {
      navigate(
        `/?search=${paramSearch ? paramSearch : props.search}&skip=0&limit=${
          paramLimit ? paramLimit : props.limit
        }`
      );
    } else {
      const newValueCurPage = paramPage - 2;
      navigate(
        `/?search=${paramSearch ? paramSearch : props.search}&skip=${skip(
          Number(newValueCurPage)
        )}&limit=${paramLimit ? paramLimit : props.limit}`
      );
    }
  };

  const handleForwardClick: MouseEventHandler = (e) => {
    e.preventDefault();
    const newValueCurPage = paramPage + 1;
    navigate(
      `/?search=${paramSearch ? paramSearch : props.search}&skip=${skip(
        Number(newValueCurPage - 1)
      )}&limit=${paramLimit ? paramLimit : props.limit}`
    );
  };

  return (
    <section className={styles.pagination}>
      <button
        onClick={(e) => {
          handleBackClick(e);
        }}
      >
        PREVIOUS
      </button>
      <div className={styles.page_number}>{paramPage}</div>
      <button
        onClick={(e) => {
          handleForwardClick(e);
        }}
      >
        NEXT
      </button>
    </section>
  );
}
export default Pagination;
