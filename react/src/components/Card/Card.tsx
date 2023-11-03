import { Component } from 'react';
import styles from './card.module.css';
import { CardProps } from './CardPropsType';

function Card(props: CardProps) {
  const { id, name, image, status, species, gender } = props;
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt={id.toString()} />
      </div>
      <div className={styles.info}>
        <div className={styles.wrapper}>
          <div className={styles.name}>Name:{name}</div>
          <div className={styles.status}>Status: {status}</div>
          <div className={styles.species}>Species: {species}</div>
          <div className={styles.gender}>Gender: {gender}</div>
        </div>
      </div>
    </div>
  );
}

export { Card };
