import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onAddToCartItems,
  onAddToFavorite,
  onChangeSearchInput,
}) {
  return (
    <div className="content">
      <div className="content__body">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="body__search">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear"
              src="/img/btn-remove.svg"
              alt="clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="content__row">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              {...item}
              addToFavorite={(obj) => onAddToFavorite(obj)}
              addToCart={(obj) => onAddToCartItems(obj)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
