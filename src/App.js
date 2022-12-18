function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="headerLeft__block">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/cart.svg" />
            <span>120$</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="content__row">
          <div className="card">
            <div className="card__image">
              <img
                width={133}
                height={112}
                src="/img/sneakers/1.jpg"
                alt="sneakers"
              />
            </div>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__block">
              <div className="block__price">
                <p>Цена:</p>
                <b>129$</b>
              </div>
              <button className="block__button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                width={133}
                height={112}
                src="/img/sneakers/2.jpg"
                alt="sneakers"
              />
            </div>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__block">
              <div className="block__price">
                <p>Цена:</p>
                <b>129$</b>
              </div>
              <button className="block__button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                width={133}
                height={112}
                src="/img/sneakers/3.jpg"
                alt="sneakers"
              />
            </div>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__block">
              <div className="block__price">
                <p>Цена:</p>
                <b>129$</b>
              </div>
              <button className="block__button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                width={133}
                height={112}
                src="/img/sneakers/4.jpg"
                alt="sneakers"
              />
            </div>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__block">
              <div className="block__price">
                <p>Цена:</p>
                <b>129$</b>
              </div>
              <button className="block__button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
