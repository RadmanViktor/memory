import "../index.css";
import { Color } from "../types";
import data from "../data";
import Gameboard from "../components/Gameboard";
import React from "react";

const MainView = () => {
  const colors = data();

  return (
    <div style={{ backgroundColor: "#2B2A33" }}>
      <Gameboard />
    </div>
  );
};

export default MainView;
