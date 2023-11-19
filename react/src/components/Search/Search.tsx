import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './search.module.css';
import ChooseLimit from '../ChooseLimit/ChooseLimit';
import Pagination from '../Pagination/Pagination';
import { MouseEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLocalStorageValue } from '../../features/search/searchSlice';

function Header() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const paramSearch = searchParams.get('search');
  const paramSkip = searchParams.get('skip');
  const paramLimit = searchParams.get('limit');

  const getInputValue = (): string => {
    const localValue = localStorage.getItem('search');
    return localValue ? localValue : '';
  };

  const [SearchValue] = useState(paramSearch ? paramSearch : getInputValue());

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('search', SearchValue);
    navigate(
      `/?search=${SearchValue}&skip=${paramSkip ? paramSkip : '0'}&limit=${
        paramLimit ? paramLimit : 10
      }`
    );
  };

  return (
    <div className={styles.searchbar}>
      <input
        onChange={(e) => {
          dispatch(setLocalStorageValue(e.target.value));
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
      <Pagination />
      <ChooseLimit />
    </div>
  );
}

export default Header;
