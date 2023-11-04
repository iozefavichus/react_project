import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './product.module.css';
import { CardType } from '../Card/CardPropsType';

function ProductDetails() {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then(
        (response) => {
          setData(response);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          error;
        }
      );
  }, [id]);

  const { page, search, limit } = useParams();

  const showData = (data: CardType) => {
    const { id, title, images, price, description } = data;
    return (
      <div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={images[0]} alt={id.toString()} />
          </div>
          <div className={styles.info}>
            <div className={styles.wrapper}>
              <div className={styles.name}>Name:{title}</div>
              <div className={styles.description}>{description}</div>
              <div className={styles.price}>Price: {price}euro</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Link
        to={`/?search=${search}&page=${page}&limit=${limit}`}
        className="closeInfo"
      >
        Close detail info
      </Link>
      {isLoaded && data ? <div>{showData(data)}</div> : 'The data is loading'}
    </div>
  );
}

export default ProductDetails;
