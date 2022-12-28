import Card from "../components/Card";

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content">
      <div className="content__body">
        <h1>Мои закладки</h1>
      </div>
      <div className="content__row">
        {items.map((item, index) => (
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
