import React from "react";
import AppContext from "../context";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="empty">
      <div className="box">
        <img src={image} alt="box" />
      </div>
      <div className="title">{title}</div>
      <div className="text">{description}</div>
      <button
        onClick={() => setCartOpened(false)}
        className="return greenButton"
      >
        <img src="img/arrowL.png" alt="arrow" /> Вернуться назад
      </button>
    </div>
  );
};

export default Info;
