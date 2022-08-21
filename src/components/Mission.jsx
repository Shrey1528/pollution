import React from "react";
import styled from "styled-components";

export const Mission = () => {
  return (
    <MissionStyled>
      <div className="mission-con">
        <h1>Our Mission</h1>
        <hr />
        <h3>
          We want to reduce plastic waste efficiently and effectively in due
          time using micro-organisms to prevent future hazards caused by plastic
          wastes.
        </h3>
        <div className="btn">
          <button>Click to know more</button>
        </div>
      </div>
    </MissionStyled>
  );
};

export const MissionStyled = styled.div`
  .mission-con {
    border-radius: 20px;
    width: 90%;
    margin: 0 auto;
    margin-top: 3rem;
    background-color: white;
    padding: 1rem;
    h1 {
      text-align: center;
      color: #024731;
      text-transform: uppercase;
    }
    h3 {
      text-align: center;
      font-size: 1.5rem;
      color: #1c8200;
    }
    hr {
      width: 90%;
      height: 5px;
      border-radius: 10px;
      background-color: gray;
      margin-bottom: 2rem;
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      margin-bottom: 1rem;
      button {
        padding: 1rem;
        font-size: 1.2rem;
        text-transform: uppercase;
        border-radius: 10px;
        background: none;
        border: 1px solid #00a45b;
        color: #00a45b;
        &:hover {
          cursor: pointer;
          background-color: #00a45b;
          border-color: #00a45b;
          color: white;
        }
      }
    }
  }
`;
