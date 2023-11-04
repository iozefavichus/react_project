import { useState, useEffect } from 'react';
import styles from './catalog.module.css';
import { Card } from '../Card/Card';
import { CardType } from '../Card/CardPropsType';
import { Link } from 'react-router-dom';

type MyProps = {
  search: string;
  limit: number;
};

function Catalog(props: MyProps) {
  const [isLoaded, isLoadedChange] = useState(false);
  const [apiInfo, apiInfoChange] = useState([]);
  const [error] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=10`)
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
  }, [props.search]);

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
