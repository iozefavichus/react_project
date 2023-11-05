import { ChangeEvent, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './choose.module.css';

export interface PropsLimit {
  search: string;
  page: number;
  limit: number;
}

const ChooseLimit = (props: PropsLimit) => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const paramSearch = searchParams.get('search');
  const paramPage = searchParams.get('page');
  const paramLimit = searchParams.get('limit');
  console.log(paramLimit);

  const [limit, setlimit] = useState(paramLimit ? paramLimit : props.limit);
  console.log('1-', limit);

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
    setlimit(Number(limitValue));
    console.log('2-', limit, limitValue);
    navigate(
      `/?search=${paramSearch ? paramSearch : props.search}&skip=${skip(
        Number(paramPage)
      )}&limit=${limitValue}`
    );
  };

  return (
    <section className={styles.limit} defaultValue={limit}>
      <label htmlFor="limit">Results per page</label>
      <select name="limit" id="limit" onChange={changeLimit}>
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
