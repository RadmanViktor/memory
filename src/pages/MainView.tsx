import "../index.css";
import { Color } from "../types";
import data from "../data";
import Gameboard from "../components/Gameboard";
import React from "react";

const MainView = () => {
  const colors = data();

  return (
    <div style={{ backgroundColor: "#2B2A33" }}>
      <Gameboard
        randomColors={generateRandomColors(colors)}
      />
    </div>
  );
};

const generateRandomColors = (colors: Color[]): Color[] => {
  let arr: Color[] = [];
  while (1 <= colors.length) {
    let randomIndex = Math.floor(Math.random() * colors.length);
    let color = colors[randomIndex];

    arr.push(color);
    colors.splice(randomIndex, 1);
  }
  return arr;
};

export default MainView;
