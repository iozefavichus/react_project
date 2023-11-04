import { useState, ChangeEvent } from 'react';
import styles from './header.module.css';
import ChooseLimit from '../ChooseLimit/ChooseLimit';
import Pagination from '../Pagination/Pagination';
import { useLoaderData } from 'react-router-dom';

type MyProps = {
  search?: string | undefined;
  // onChangeSearch(a: string): void;
  handleClick: (value: string) => void;
};

function Header(props: MyProps) {
  const getInputValue = () => {
    const localValue = localStorage.getItem('search');
    return localValue ? JSON.parse(localValue) : '';
  };

  const [value, setValue] = useState(getInputValue());
  const [limit, setLimit] = useState(0);

  const response = useLoaderData() as Response;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('inputValue', JSON.stringify(e.target.value));
    setValue(e.target.value);
  };

  const startLoadingResults = () => {
    isLoadedChange(true);
  };

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault;
  //   setValue(event.target.value);
  //   if (value) {
  //     console.log(value);
  //     props.onChangeSearch(value);
  //     localStorage.setItem('search', value);
  //   }
  // };

  // useEffect(() => {
  //   return () => {
  //     if (value) {
  //       localStorage.setItem('search', value);
  //     }
  //   };
  // }, [value]);

  return (
    <div className={styles.searchbar}>
      <input
        // onChange={() => setValue(value)}
        className={styles.input_search}
        placeholder={getInputValue()}
        type="text"
        id="search"
        onInput={handleInputChange}
        // value={value}
      ></input>
      <button
        className="button"
        onClick={() => {
          props.handleClick(value);
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
      <Pagination handleClick={startLoadingResults} next={'3'} previous={'1'} />
      <ChooseLimit />
    </div>
  );
}

export default Header;
