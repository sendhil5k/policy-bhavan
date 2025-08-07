import React, { FC } from "react";
import "./Card.css";
type cardProps = {
  title:string;
  content: React.ReactNode;
}
const Card:FC<cardProps> = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-content">{content}</div>
    </div>
  );
};

export default Card;