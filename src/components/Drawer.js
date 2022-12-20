function Drawer() {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
        </h2>
        <div className="items">
          <div className="cartItem">
            <div className="cartItem__image">
              <img
                width={70}
                height={70}
                src="/img/sneakers/1.jpg"
                alt="sneakers"
              />
            </div>
            <div className="cartItem__block">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>129$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
          <div className="cartItem">
            <div className="cartItem__image">
              <img
                width={70}
                height={70}
                src="/img/sneakers/1.jpg"
                alt="sneakers"
              />
            </div>
            <div className="cartItem__block">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>129$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>214$</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>10,7$</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
