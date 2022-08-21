import React from "react";
import styled from "styled-components";
import bg from "../assets/bg.jpeg";

export const Home = () => {
  return (
    <HomeStyled>
      <div className="home-con">
        <img src={bg} alt="" />
        <div className="text">
          <h1>Let's clean the earth together!</h1>
          <p>
            “ There are certain things in life – one is death, second is change
            and the third is waste. ”
          </p>
          <button>Explore</button>
        </div>
      </div>
    </HomeStyled>
  );
};

export const HomeStyled = styled.div`
  .home-con {
    img {
      width: 100%;
      height: 90vh;
      filter: brightness(90%);
    }
    .text {
      h1 {
        position: absolute;
        top: 25%;
        right: 10%;
        width: 30%;
        display: flex;
        text-align: center;
        font-size: 3rem;
        text-transform: uppercase;
        color: white;
        letter-spacing: 0.1rem;
      }
      p {
        position: absolute;
        top: 60%;
        right: 0;
        color: white;
        font-size: 1.2rem;
      }
      button {
        position: absolute;
        top: 75%;
        right: 20%;
        padding: 1rem 3rem;
        background: none;
        color: white;
        border-color: white;
        border-radius: 10px;
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        &:hover {
          cursor: pointer;
          background-color: #00a45b;
          border-color: #00a45b;
        }
      }
    }
  }
`;
