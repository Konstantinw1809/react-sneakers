function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" />
        <div className="headerLeft__block">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li onClick={props.openCart}>
          <img width={18} height={18} src="/img/cart.svg" />
          <span>120$</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
