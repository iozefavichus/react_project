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

  const [searchParams, setSearchParams] = useSearchParams();
  const paramSearch = searchParams.get('search');
  const paramPage = searchParams.get('page');
  const paramLimit = searchParams.get('limit');
  console.log('catalog', paramSearch, paramPage, paramLimit);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?search=${
        paramSearch ? paramSearch : props.search
      }&page=${paramPage ? paramPage : props.page}&limit=${
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
  }, [paramSearch, paramPage, paramLimit]);

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
          <Link key={index} to={`/detail/${el.id}`}>
            <Card key={index} {...el} />
          </Link>
        ))}
      </div>
    );
}

export default Catalog;
