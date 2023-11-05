// import { useState, ChangeEvent } from 'react';
import styles from './header.module.css';
import ChooseLimit from '../ChooseLimit/ChooseLimit';
import Pagination from '../Pagination/Pagination';

type MyProps = {
  search: string;
  page: number;
  limit: number;
};

function Header(props: MyProps) {
  const getInputValue = () => {
    const localValue = localStorage.getItem('search');
    return localValue ? JSON.parse(localValue) : '';
  };

  return (
    <div className={styles.searchbar}>
      <input
        className={styles.input_search}
        placeholder={getInputValue()}
        type="text"
        id="search"
      ></input>
      <button className="button">Search</button>
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
