import { useState, useEffect } from 'react';
import styles from './catalog.module.css';
import { Card } from '../Card/Card';
import { CardType } from '../Card/CardPropsType';

type MyProps = {
  search: string;
};

function Catalog(props: MyProps) {
  const [isLoaded] = useState(false);
  const [apiInfo] = useState([]);
  const [error] = useState(null);

  useEffect(() => {
    console.log('API loaded');
    fetch(`https://rickandmortyapi.com/api/character/?name=${props.search}`)
      .then((response) => response.json())
      .then(
        (response) => {
          apiInfo: response.results;
          isLoaded: true;
        },
        (error) => {
          isLoaded: true;
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
