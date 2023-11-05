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
  const paramSearch = searchParams.get('search');
  const paramPage = Number(searchParams.get('skip')) / 10 + 1;
  const paramLimit = searchParams.get('limit');

  const skip = (paramPage: number): number => {
    let result;
    if (paramPage) {
      result = paramPage * 10;
    } else {
      result = 0;
    }
    return result;
  };

  useEffect(() => {
    console.log(
      `https://dummyjson.com/products?search?q=${
        paramSearch ? paramSearch : props.search
      }&skip=${skip(Number(paramPage))}&limit=${
        paramLimit ? paramLimit : props.limit
      }`
    );
    fetch(
      `https://dummyjson.com/products?search?q=${
        paramSearch ? paramSearch : props.search
      }&skip=${skip(Number(paramPage))}&limit=${
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
