import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionboxbox-description">
        <p>
          An e-commerce website is a site that allows people to buy and sell
          goods and services online. E-commerce websites can also help
          businesses process orders, accept payments, manage shipping and
          logistics, and provide customer service
        </p>
        <p>
          The term “e-commerce” simply means the sale of goods or services on
          the internet. In its most basic form, e-commerce involves
          electronically transferring funds and data between 2 or more parties.
          This form of business has evolved quite a bit since its beginnings in
          the electronic data interchange of the 1960s and the inception of
          online shopping in the 1990s.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
