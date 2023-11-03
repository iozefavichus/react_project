import { useState, useEffect } from 'react';
import styles from './header.module.css';

type MyProps = {
  search?: string | undefined;
  onChangeSearch(a: string): void;
};

function Header(props: MyProps) {
  const [value, setValue] = useState(props.search);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    if (value) {
      props.onChangeSearch(value);
      localStorage.setItem('search', value);
    }
  };

  useEffect(() => {
    return () => {
      if (value) {
        localStorage.setItem('search', value);
      }
    };
  }, [value]);

  return (
    <div className={styles.searchbar}>
      <input
        onChange={() => setValue(value)}
        className={styles.input_search}
        placeholder="Enter text ..."
        type="text"
        id="search"
        value={value}
      ></input>
      <button className="button" onClick={handleClick}>
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
    </div>
  );
}

export default Header;
