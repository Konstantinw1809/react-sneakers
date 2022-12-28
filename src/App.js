import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://63a5b0dc318b23efa79ae478.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://63a5b0dc318b23efa79ae478.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://63a5b0dc318b23efa79ae478.mockapi.io/favorite")
      .then((res) => {
        setFavoriteItems(res.data);
      });
  }, []);

  const onAddToCartItems = (obj) => {
    // if ((cartItems.find((item) => item.id !== obj.id))) {
    // }
    axios.post("https://63a5b0dc318b23efa79ae478.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveFromCartItems = (id) => {
    axios.delete(`https://63a5b0dc318b23efa79ae478.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favoriteItems.find((item) => item.id === obj.id)) {
        axios.delete(
          `https://63a5b0dc318b23efa79ae478.mockapi.io/favorite/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://63a5b0dc318b23efa79ae478.mockapi.io/favorite",
          obj
        );
        setFavoriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          closeCart={() => setCartOpened(false)}
          removeFromCart={(id) => onRemoveFromCartItems(id)}
        />
      )}
      <Header openCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onAddToCartItems={onAddToCartItems}
              onAddToFavorite={onAddToFavorite}
              onChangeSearchInput={onChangeSearchInput}
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites
              items={favoriteItems}
              onAddToFavorite={onAddToFavorite}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
