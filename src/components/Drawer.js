function Drawer({ closeCart, items = [], removeFromCart }) {
  const onClickRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img
            className="closeBtn"
            src="/img/btn-remove.svg"
            alt="close"
            onClick={closeCart}
          />
        </h2>
        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem">
                  <div className="cartItem__image">
                    <img
                      width={70}
                      height={70}
                      src={obj.imageUrl}
                      alt="sneakers"
                    />
                  </div>
                  <div className="cartItem__block">
                    <p>{obj.title}</p>
                    <b>{obj.price}$</b>
                  </div>
                  <img
                    className="removeBtn"
                    onClick={() => onClickRemove(obj.id)}
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
          </>
        ) : (
          <div className="empty">
            <div className="box">
              <img src="/img/box.png" alt="box" />
            </div>
            <div className="title">Корзина пустая</div>
            <div className="text">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </div>
            <button onClick={closeCart} className="return greenButton">
              <img src="/img/arrowL.png" alt="arrow" /> Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
