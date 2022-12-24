function Drawer({ closeCart, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="close"
            onClick={closeCart}
          />
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
              <div className="cartItem__image">
                <img width={70} height={70} src={obj.imageUrl} alt="sneakers" />
              </div>
              <div className="cartItem__block">
                <p>{obj.title}</p>
                <b>{obj.price}$</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
          ))}
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
