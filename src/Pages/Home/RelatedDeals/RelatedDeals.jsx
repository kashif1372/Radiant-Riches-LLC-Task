import React from "react";
import "./RelatedDeals.scss";
import Card from "./Card";
import cardImg from "../../../assets/banner1.png";

const RelatedDeals = () => {
  return (
    <div className="main">
      <p className="main-heading">
        Related deals you might like for
      </p>
      <div
        className="all-card"
      >
        <Card
          image={cardImg}
          offer="20% Off"
          limit="Limited time"
          title="Webbuilder 1"
          description="Computer Modern classic with Wix support"
          price="$39.96"
          actualPrice="$49.96"
        />
        <Card
          image={cardImg}
          offer="20% Off"
          limit="Limited time"
          title="Webbuilder 1"
          description="Computer Modern classic with Wix support"
          price="$39.96"
          actualPrice="$49.96"
        />
        <Card
          image={cardImg}
          offer="20% Off"
          limit="Limited time"
          title="Webbuilder 1"
          description="Computer Modern classic with Wix support"
          price="$39.96"
          actualPrice="$49.96"
        />
      </div>
    </div>
  );
};

export default RelatedDeals;
