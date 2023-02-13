import React from "react";
import { CardProps, ICard } from "../types";

const Card = ({ id, color, isActive, setCards, cards, removed }: CardProps) => {
  const openCardHandler = () => {
    let updatedCards: ICard[] = cards.map((card) => {
      if (card.id === id) {
        return { ...card, active: true };
      }
      return card;
    });

    setCards(updatedCards);
  };

  const cardStyle = {
    backgroundColor: isActive ? color : "#d3c4e3",
    opacity: removed ? "0" : "1",
    margin: "0.4rem",
    cursor: "pointer",
    borderRadius: "1rem",
  };

  return <div style={cardStyle} onClick={() => openCardHandler()}></div>;
};

export default Card;
