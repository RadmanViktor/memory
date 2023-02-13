import styled from "styled-components";
import { PlayerFormProps } from "../types";
import PlayerForm from "../components/PlayerForm";
import React from "react";

const CreatePlayer = ({ setNickName, nickName }: PlayerFormProps) => {
  return (
    <PlayerFormContainer>
      <PlayerForm setNickName={setNickName} nickName={nickName}></PlayerForm>
    </PlayerFormContainer>
  );
};

const PlayerFormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CreatePlayer;
