import React from "react";
import styled from "styled-components";
import step from "../assets/step.jpg";

export const Step = () => {
  return (
    <StepStyled>
      <h2>Lets take a step forward and make the earth pollution free. </h2>
      <img src={step} alt="" />
    </StepStyled>
  );
};

export const StepStyled = styled.div`
  width: 90%;
  height: 40vh;
  margin: 0 auto;
  border: 3px solid green;
  border-radius: 18%;
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: white;
  h2 {
    font-size: 2rem;
    padding-left: 5rem;
  }
  img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    position: absolute;
    right: 1%;
  }
`;
