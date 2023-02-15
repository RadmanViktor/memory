import React from "react";
import { ICard, Color } from "../types";
import Card from "./Card";
import styled from "styled-components";
import {generateRandomColors} from '../data';
import { useState, useEffect, useCallback } from "react";

const Gameboard = () => {
  
  let cardsInitialData = (colors:Color[]):ICard[] => {
    let cards:ICard[] = []

    colors.map((color) => {
      let card:ICard = { ...color, active: false, removed: false };
      cards.push(card);
    });

    return cards;
  }

  const [disableGameboard, setDisableGameboard] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);
  const [cards, setCards] = useState<ICard[]>(cardsInitialData(generateRandomColors()));
  const [isCompleted, setIsCompleted] = useState<boolean>(true);

  const updatePoints = useCallback(
    (operator: string) => {
      if (operator === "+") {
        return setPoints((prevPoints) => prevPoints + 1);
      }

      if (points !== 0) {
        setPoints((prevPoints) => prevPoints - 1);
      }
    },
    [points]
  );
    
  useEffect(() => {
    if (cards.every((card) => card.removed)) {
      setIsCompleted(true);
    }
  }, [setIsCompleted, cards]);

  useEffect(() => {
    let activeCards:ICard[] = cards.filter((card) => {
      return card.active === true && !card.removed;
    });

    if (activeCards.length === 2) {
      const [cardOne, cardTwo ] = activeCards;
      // Hur kan jag kolla så att korten är likadana?
      
      if (cardOne.color === cardTwo.color) {
        updatePoints("+");
        setDisableGameboard(true);
        setTimeout(() => {
          setCards(updateCards(cards, cardOne, cardTwo, true, false));
          setDisableGameboard(false);
        }, 2000);
      } else {
        updatePoints("-");
        setDisableGameboard(true);

        setTimeout(() => {
          setCards(updateCards(cards, cardOne, cardTwo, false, false));
          setDisableGameboard(false);
        }, 2000);
      }
    }
  }, [cards, setDisableGameboard]);

  const updateCards = (
    cards: ICard[],
    cardOne: ICard,
    cardTwo: ICard,
    removed: boolean,
    active: boolean
  ):ICard[] => {
    return cards.map((card) => {
      if (card.id === cardOne.id || card.id === cardTwo.id) {
        return { ...card, removed, active };
      }
      return card;
    });
  };

  const playAgainHandler = () => {
    setCards(cardsInitialData(generateRandomColors()));
    setIsCompleted(false);
    setPoints(0);
  };

  return (
    <>
      {!isCompleted ? (
        <GameboardStyled
          style={{ pointerEvents: disableGameboard ? "none" : "auto" }}
        >
          <PlayerNameContainerStyled>
            <h1>
              {sessionStorage.getItem('playerName')} : {points} points
            </h1>
          </PlayerNameContainerStyled>
          <GridContainerStyled>
            {cards.length > 1 &&
              cards.map((card, index) => (
                <Card
                  removed={card.removed}
                  setCards={setCards}
                  isActive={card.active}
                  color={card.color}
                  cards={cards}
                  id={card.id}
                  key={index}
                />
              ))}
          </GridContainerStyled>
        </GameboardStyled>
      ) : (
        <CompletedStyled>
          {sessionStorage.getItem('playerName')} completed with {points} points!
          <br />
          <button onClick={() => playAgainHandler()}>Play again?</button>
        </CompletedStyled>
      )}
    </>
  );
};

const PlayerNameContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 1.4rem;
  color: white;
`;

const CompletedStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 3rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.6rem;
    padding: 0.5rem 2rem;
    background-color: #edafb8;
    border-radius: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 110%);
  }
`;
const GridContainerStyled = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 9rem);
  grid-template-columns: repeat(4, 9rem);
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const GameboardStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Gameboard;
