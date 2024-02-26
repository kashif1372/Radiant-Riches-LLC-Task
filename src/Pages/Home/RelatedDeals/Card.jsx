import React from "react";

const Card = ({ image, offer, limit, title, description, price, actualPrice }) => {
  return (
    <div className="card">
      <div className="img-div">
        <img className="deal-card-img" src={image} alt="" />
      </div>
      <div className="offer-detail">
        <p className="offer">{offer}</p>
        <p className="limit">{limit}</p>
      </div>
      <p className="card-title">{title}</p>
      <p className="card-desc">{description}</p>
      <div className="price-div">
        <p className="price">{price}</p>
        <p className="actual-price">{actualPrice}</p>
        <p className="off">(20% Off)</p>
      </div>
      <div className="view-div">
        <button className="view-btn">View Deal</button>
      </div>
    </div>
  );
};

export default Card;
