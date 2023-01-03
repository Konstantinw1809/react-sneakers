import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites() {
  const { favoriteItems, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="content__body">
        <h1>Мои закладки</h1>
      </div>
      <div className="content__row">
        {favoriteItems.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            addToFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
