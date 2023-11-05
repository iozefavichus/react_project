import { useState, useEffect } from 'react';
import styles from './catalog.module.css';
import { Card } from '../Card/Card';
import { CardType } from '../Card/CardPropsType';
import { Link, useSearchParams } from 'react-router-dom';

type MyProps = {
  search: string;
  page: number;
  limit: number;
};

function Catalog(props: MyProps) {
  const [isLoaded, isLoadedChange] = useState(false);
  const [apiInfo, apiInfoChange] = useState([]);
  const [error] = useState(null);

  const [searchParams] = useSearchParams();
  const paramSearch = searchParams.get('search')
    ? searchParams.get('search')
    : localStorage.getItem('search');
  const paramSkip = searchParams.get('skip');
  const paramLimit = searchParams.get('limit');

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products/search?q=${
        paramSearch ? paramSearch : props.search
      }&skip=${paramSkip ? paramSkip : 0}&limit=${
        paramLimit ? paramLimit : props.limit
      }`
    )
      .then((response) => response.json())
      .then(
        (response) => {
          apiInfoChange(response.products);
          isLoadedChange(true);
        },
        (error) => {
          isLoadedChange(true);
          error;
        }
      );
  }, [paramSearch, paramSkip, paramLimit]);

  if (error) {
    return <p>Error</p>;
  } else if (!isLoaded) {
    return <p>Loading...</p>;
  }
  if (apiInfo.length === 0) {
    return <div> Nothing was found </div>;
  } else
    return (
      <div className={styles.result}>
        {apiInfo.map((el: CardType, index: number) => (
          <Link
            key={index}
            to={`/detail/${el.id}/${paramSearch ? paramSearch : '0'}/${
              paramSkip ? paramSkip : 0
            }/${paramLimit ? paramLimit : 10}`}
          >
            <Card key={index} {...el} />
          </Link>
        ))}
      </div>
    );
}

export default Catalog;
