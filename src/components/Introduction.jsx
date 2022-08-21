import React from "react";
import styled from "styled-components";
import intro from "../assets/intro.png";

export const Introduction = () => {
  return (
    <IntroStyled>
      <div className="intro-con">
        <div className="heading">
          <h3>What is waste management?</h3>
        </div>
        <div className="info">
          <p>
            Waste management is all those activities and action required to
            manage waste from its inception to its final disposal. This includes
            amongst other things, collection, transport, treatment and disposal
            of waste together with monitoring and regulation. It also
            encompasses the legal and regulatory framework the relates to waste
            management encompassing guidance on recycling etc. It generally
            means “the collection, transport, recovery and disposal of waste,
            including the supervision of such operations and aftercare of
            disposal sites”. However the newer concepts of ‘Waste management’
            talk about ‘Reduce, Reuse and Recycle of waste’ over and above waste
            disposal.
          </p>
          <img src={intro} alt="" />
        </div>
      </div>
    </IntroStyled>
  );
};

export const IntroStyled = styled.div`
  .intro-con {
    width: 95%;
    margin: 0 auto;
    margin-top: 3rem;
    border: 5px solid black;
    border-radius: 20px;
    background-color: white;
    .heading {
      position: absolute;
      top: 103%;
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
      display: flex;
      align-items: center;
      gap: 1rem;
      p {
        font-size: 1.2rem;
      }
      img {
        width: 20%;
      }
    }
  }
`;
