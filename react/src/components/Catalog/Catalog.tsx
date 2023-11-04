import { useState, useEffect } from 'react';
import styles from './catalog.module.css';
import { Card } from '../Card/Card';
import { CardType } from '../Card/CardPropsType';

type MyProps = {
  search: string;
};

function Catalog(props: MyProps) {
  const [isLoaded, isLoadedChange] = useState(false);
  const [apiInfo, apiInfoChange] = useState([]);
  const [error] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
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
    console.log('Hi1');
    return <p>Error</p>;
  } else if (!isLoaded) {
    console.log('Hi2');
    return <p>Loading...</p>;
  }
  if (apiInfo.length === 0) {
    return <div> Nothing was found </div>;
  } else
    return (
      <div className={styles.result}>
        {apiInfo.map((el: CardType, index: number) => (
          <Card key={index} {...el} />
        ))}
      </div>
    );
}

export default Catalog;
