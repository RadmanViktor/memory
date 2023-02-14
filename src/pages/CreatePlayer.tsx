import React from "react";
import styled from "styled-components";
import PlayerForm from "../components/PlayerForm";

const CreatePlayer = () => {
  return (
    <PlayerFormContainerStyled>
      <PlayerForm></PlayerForm>
    </PlayerFormContainerStyled>
  );
};

const PlayerFormContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CreatePlayer;
