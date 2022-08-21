import React from "react";
import styled from "styled-components";
import surface from "../assets/surface.jpg";
import eco from "../assets/eco.jpg";

export const Effects = () => {
  return (
    <EffectsStyled>
      <div className="effects-con">
        <div className="heading">
          <h3>Effects of waste management</h3>
        </div>
        <div className="info">
          <div className="env">
            <img src={surface} alt="" width={700} />
            <h3>Environmental</h3>
            <div className="lists">
              <ul>
                <li>Surface water contamination</li>
                <li>Ground Water contamination </li>
                <li>Soil contamination </li>
                <li>Air contamination </li>
              </ul>
            </div>
          </div>
          <div className="eco">
            <img src={eco} alt="" width={600} height={370} />
            <h3>Economical</h3>
            <div className="lists">
              <ul>
                <li>Municipal wellbeing</li>
                <li>Recycling revenue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </EffectsStyled>
  );
};

export const EffectsStyled = styled.div`
  .effects-con {
    width: 95%;
    margin: 0 auto;
    margin-top: 3rem;
    border-top: 5px solid black;
    .heading {
      position: absolute;
      top: 144.5%;
      left: 40%;
      h3 {
        font-size: 1.5rem;
        background-color: #eeeeee;
        color: #024731;
      }
    }
    .info {
      text-align: center;
      margin-top: 2rem;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      .env {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        img {
          filter: brightness(50%);
          border-radius: 20px;
        }
        h3 {
          position: absolute;
          top: 160%;
          font-size: 1.5rem;
          text-transform: uppercase;
          color: white;
          text-decoration: underline;
        }
        .lists {
          position: absolute;
          top: 170%;
          left: 17%;
          font-size: 1.2rem;
          color: white;
          ul {
            li {
              list-style-type: none;
            }
          }
        }
      }
      .eco {
        display: flex;
        flex-direction: column;
        img {
          filter: brightness(50%);
          border-radius: 20px;
        }
        h3 {
          position: absolute;
          top: 160%;
          left: 68%;
          font-size: 1.5rem;
          text-transform: uppercase;
          color: white;
          text-decoration: underline;
        }
        .lists {
          position: absolute;
          top: 170%;
          right: 21%;
          color: white;
          font-size: 1.2rem;
          ul {
            li {
              list-style-type: none;
            }
          }
        }
      }
    }
  }
`;
