function Card() {
  return (
    <div className="card">
      <div className="card__favorite">
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
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
          <img width={32} height={32} src="/img/btn-plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
