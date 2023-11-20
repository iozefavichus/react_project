import { ChangeEvent, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './choose.module.css';
import { useMyContext } from '../../context';

const ChooseLimit = () => {
  const { localStorageValue, limit } = useMyContext();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const paramSearch = searchParams.get('search');
  const paramPage = searchParams.get('page');
  const paramLimit = searchParams.get('limit');

  const [limitValue, setlimitValue] = useState(paramLimit ? paramLimit : limit);

  const skip = (paramPage: number): number => {
    let result;
    if (paramPage) {
      result = paramPage * 10;
    } else {
      result = 0;
    }
    return result;
  };

  const changeLimit = (e: ChangeEvent<HTMLSelectElement>) => {
    const limitValue = e.target.value;
    setlimitValue(Number(limitValue));
    navigate(
      `/?search=${paramSearch ? paramSearch : localStorageValue}&skip=${skip(
        Number(paramPage)
      )}&limit=${limitValue}`
    );
  };

  return (
    <section className={styles.limit} defaultValue={limitValue}>
      <label htmlFor="limit">Results per page</label>
      <select
        className={styles.area_limit}
        name="limit"
        id="limit"
        onChange={changeLimit}
      >
        <option value={'none'} selected disabled hidden>
          Select limit
        </option>
        <option value={10}>10</option>
        <option value={5}>5</option>
        <option value={20}>20</option>
      </select>
    </section>
  );
};

export default ChooseLimit;
