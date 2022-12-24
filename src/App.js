import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://63a5b0dc318b23efa79ae478.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  const addToCartItems = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} closeCart={() => setCartOpened(false)} />
      )}
      <Header openCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content__body">
          <h1>Все кроссовки</h1>
          <div className="body__search">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="content__row">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              addToFavorite={() => console.log("Добавили в закладки")}
              addToCart={(obj) => addToCartItems(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
