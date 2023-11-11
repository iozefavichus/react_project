import styles from './card.module.css';
import { CardProps } from '../../types/types';

function Card(props: CardProps) {
  const { id, title, images, price, description } = props;
  return (
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
  );
}

export { Card };
