import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="headerLeft__block">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li onClick={props.openCart}>
          <img
            className="cart"
            width={18}
            height={18}
            src="/img/cart.svg"
            alt="cart"
          />
          <span>120$</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              className="heart"
              src="/img/heart.svg"
              alt="favorite"
            />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
