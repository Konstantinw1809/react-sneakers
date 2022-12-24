import React from "react";
import styles from "./Card.module.scss";

function Card({ title, imageUrl, price, addToFavorite, addToCart }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    addToCart({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={addToFavorite}>
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <div className={styles.image}>
        <img width={133} height={112} src={imageUrl} alt="sneakers" />
      </div>
      <h5>{title}</h5>
      <div className={styles.block}>
        <div className={styles.price}>
          <p>Цена:</p>
          <b>{price}$</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
