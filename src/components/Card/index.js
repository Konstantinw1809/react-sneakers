import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

function Card({
  id,
  title,
  imageUrl,
  price,
  addToFavorite,
  addToCart,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, imageUrl, price };

  const onClickPlus = () => {
    addToCart(obj);
  };

  const onClickFavorite = () => {
    addToFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {loading ? (
          <ContentLoader
            speed={2}
            width={150}
            height={187}
            viewBox="0 0 150 187"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
            <rect x="0" y="105" rx="5" ry="5" width="150" height="15" />
            <rect x="0" y="125" rx="5" ry="5" width="90" height="15" />
            <rect x="0" y="160" rx="5" ry="5" width="80" height="25" />
            <rect x="118" y="152" rx="11" ry="11" width="32" height="32" />
          </ContentLoader>
        ) : (
          <>
            <div className={styles.favorite} onClick={onClickFavorite}>
              {addToFavorite && (
                <img
                  src={isFavorite ? "img/liked.svg" : "img/unliked.svg"}
                  alt="heart"
                />
              )}
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
              {addToCart && (
                <img
                  className={styles.plus}
                  onClick={onClickPlus}
                  src={
                    isItemAdded(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"
                  }
                  alt="plus"
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
