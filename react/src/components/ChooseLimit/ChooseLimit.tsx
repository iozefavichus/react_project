import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './choose.module.css';

const ChooseLimit = () => {
  const navigate = useNavigate();

  const changeLimit = (e: ChangeEvent<HTMLSelectElement>) => {
    const limit = e.target.value;
    // console.log(limit);
    navigate(`?limit=${limit}`);
  };

  return (
    <section className={styles.limit} defaultValue={10}>
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
