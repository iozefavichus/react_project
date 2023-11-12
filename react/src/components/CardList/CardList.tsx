import { useState, useEffect } from 'react';
import styles from './catalog.module.css';
import { Card } from '../Card/Card';
import { CardProps } from '../../types/types';
import { Link, useSearchParams } from 'react-router-dom';
import { useMyContext } from '../../context';
import { fetchData } from '../ApiHelper/ApiHelper';

function Catalog() {
  const { localStorageValue, page, limit } = useMyContext();
  const { apiData, setFetchData } = useMyContext();

  const [isLoaded, isLoadedChange] = useState(false);

  const [searchParams] = useSearchParams();
  const paramSearch = searchParams.get('search')
    ? searchParams.get('search')
    : localStorage.getItem('search');
  const paramSkip = searchParams.get('skip');
  const paramLimit = searchParams.get('limit');

  useEffect(() => {
    let isMounted = true;

    async function fetchAllData(search: string) {
      isLoadedChange(false);
      console.log(paramSkip, paramLimit);
      try {
        const data = await fetchData(
          search,
          Number(paramSkip) ? Number(paramSkip) : page,
          Number(paramLimit) ? Number(paramLimit) : limit
        );
        console.log(localStorageValue, data);
        if (isMounted) {
          setFetchData(data);
          isLoadedChange(true);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        isLoadedChange(true);
      }
    }

    fetchAllData(localStorageValue);

    return () => {
      isMounted = false;
    };
  }, [localStorageValue, paramSearch, paramSkip, paramLimit]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (apiData.products.length === 0) {
    return <div>Nothing found</div>;
  } else {
    return (
      <div role="CardList" className={styles.result}>
        {apiData.products.map((el: CardProps, index: number) => (
          <Link
            key={index}
            to={`/detail/${el.id}/${paramSearch ? paramSearch : 'search'}/${
              paramSkip ? paramSkip : 0
            }/${paramLimit ? paramLimit : 10}`}
          >
            <Card key={index} {...el} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Catalog;
