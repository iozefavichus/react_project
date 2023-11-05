import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './header.module.css';
import ChooseLimit from '../ChooseLimit/ChooseLimit';
import Pagination from '../Pagination/Pagination';
import { MouseEventHandler, useState } from 'react';

type MyProps = {
  search: string;
  page: number;
  limit: number;
};

function Header(props: MyProps) {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const paramSearch = searchParams.get('search');
  const paramSkip = searchParams.get('skip');
  const paramLimit = searchParams.get('limit');

  const getInputValue = (): string => {
    const localValue = localStorage.getItem('search');
    return localValue ? localValue : '';
  };

  const [SearchValue, setSearchValue] = useState(
    paramSearch ? paramSearch : getInputValue()
  );

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('search', SearchValue);
    navigate(
      `/?search=${SearchValue}&skip=${paramSkip ? paramSkip : '0'}&limit=${
        paramLimit ? paramLimit : props.limit
      }`
    );
  };

  return (
    <div className={styles.searchbar}>
      <input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className={styles.input_search}
        placeholder={getInputValue()}
        type="text"
        id="search"
      ></input>
      <button
        className="button"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Search
      </button>
      <button
        className={styles.button_error}
        onClick={() => {
          throw new Error('Error is catched by ErrorBoundary');
        }}
      >
        Button for error
      </button>
      <Pagination search={props.search} page={props.page} limit={props.limit} />
      <ChooseLimit
        search={props.search}
        page={props.page}
        limit={props.limit}
      />
    </div>
  );
}

export default Header;
