// import { useState, ChangeEvent } from 'react';
import styles from './header.module.css';
import ChooseLimit from '../ChooseLimit/ChooseLimit';
import Pagination from '../Pagination/Pagination';
import { useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';

type MyProps = {
  search: string;
  page: number;
  limit: number;
  // handleClick: (value: string) => void;
};

function Header(props: MyProps) {
  const getInputValue = () => {
    const localValue = localStorage.getItem('search');
    return localValue ? JSON.parse(localValue) : '';
  };
  const [isLoaded, isLoadedChange] = useState(false);
  // const [search, limit, page] = useParams();

  // const [value, setValue] = useState(getInputValue());
  // const [limit, setLimit] = useState(0);
  // const [page, setPage] = useState(0);
  // const [search, setSearch] = useState(0);

  // const response = useLoaderData() as Response;

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   localStorage.setItem('inputValue', JSON.stringify(e.target.value));
  //   setValue(e.target.value);
  // };

  // const handleChangeLimit = (value: number) => {
  //   setLimit(value);
  // };

  const startLoadingResults = () => {
    isLoadedChange(true);
  };

  return (
    <div className={styles.searchbar}>
      <input
        // onChange={() => setValue(value)}
        className={styles.input_search}
        placeholder={getInputValue()}
        type="text"
        id="search"
        // onInput={handleInputChange}
        // value={value}
      ></input>
      <button
        className="button"
        // onClick={() => {
        //   props.handleClick(value);
        // }}
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
      <Pagination
        handleClick={startLoadingResults}
        next={props.page + 1}
        previous={props.page === 1 ? 1 : props.page - 1}
      />
      <ChooseLimit
        search={props.search}
        page={props.page}
        limit={props.limit}
        // handleChange={handleChangeLimit}
      />
    </div>
  );
}

export default Header;
