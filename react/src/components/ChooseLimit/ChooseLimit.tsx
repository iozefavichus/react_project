import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './choose.module.css';
import { useSearchParams } from 'react-router-dom';

export interface PropsLimit {
  search: string;
  page: number;
  limit: number;
}

const ChooseLimit = (props: PropsLimit) => {
  console.log('Limit1', props.search, props.page, props.limit);
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const paramSearch = searchParams.get('search');
  const paramPage = searchParams.get('page');
  const paramLimit = searchParams.get('limit');
  console.log('limit2', paramSearch, paramPage, paramLimit);

  const changeLimit = (e: ChangeEvent<HTMLSelectElement>) => {
    const limit = e.target.value;
    navigate(
      `/?search=${paramSearch ? paramSearch : props.search}&page=${
        paramPage ? paramPage : props.page
      }&limit=${limit}`
    );
  };

  return (
    <section className={styles.limit} defaultValue={props.limit}>
      <label htmlFor="limit">Results per page</label>
      <select name="limit" id="limit" onChange={changeLimit}>
        <option value={10}>10</option>
        <option value={5}>5</option>
        <option value={20}>20</option>
      </select>
    </section>
  );
};

export default ChooseLimit;
