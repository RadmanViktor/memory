import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import { Color } from "../types";
import { useNavigate } from "react-router-dom";
import {generateRandomColors} from "../data";

const PlayerForm = () => {
  const colors: Color[] = generateRandomColors();
  const inputValue: any = useRef(null);
  const navigate = useNavigate();

  const playHandler = () => {
    sessionStorage.setItem('playerName', inputValue.current.value)
    navigate("/game", { replace: true });
  };

  const title = () => {
    var titleName: string = "Colour Memory";
    var titleChars: string[] = [];

    for (var i = 0; i < titleName.length; i++) {
      titleChars.push(titleName.charAt(i));
    }

    return titleChars;
  };

  return (
    <>
      <FormStyled>
        <TitleStyled>
          {title().map((char, index) => (
            <div style={{ color: colors[index].color }} key={index}>
              {char}
            </div>
          ))}
        </TitleStyled>
        <input
          placeholder="Playername..."
          type="text"
          name="PlayerName"
          ref={inputValue}
        />
        <button onClick={() => playHandler()}>Play!</button>
      </FormStyled>
    </>
  );
};
const TitleStyled = styled.div`
  margin-bottom: 5rem;
  display: flex;
  font-size: 6rem;
  font-family: "Poppins", sans-serif;
  font-weight: "100";
`;

const FormStyled = styled.div`
  width: 50%;
  height: 70%;
  border-radius: 5rem;
  background-color: #353538;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input,button {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }
  input {
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
    border-radius:1rem; 
    text-align:center;
  }
  button {
    cursor:pointer;
    font-size: 1.6rem;
    padding: 0.5rem 2rem;
    background-color:#EDAFB8;
    border-radius:2rem;
`;

export default PlayerForm;
