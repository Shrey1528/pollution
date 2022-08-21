import React from "react";
import styled from "styled-components";
import plastic from "../assets/plastic.jpg";
import dyk from "../assets/dyk.jpg";

export const Focus = () => {
  return (
    <FocusStyled>
      <div className="focus-con">
        <h1>Our Focus</h1>
        <div className="plastic-con">
          <div className="about">
            <h2>Plastic Waste</h2>
            <p>
              Plastic waste, or plastic pollution, is ‘the accumulation of
              plastic objects (e.g.: plastic bottles and much more) in the
              Earth’s environment that adversely affects wildlife, wildlife
              habitat, and humans.’ It also refers to the significant amount of
              plastic that isn’t recycled and ends up in landfill or, in the
              developing world, thrown into unregulated dump sites. In the UK,
              for example, over 5 million tonnes of plastic is consumed each
              year — and yet only 1 quarter of it is recycled.
            </p>
            <h3>How much plastic does the world produce?</h3>
            <p>
              The chart shows the increase of global plastic production,
              measured in tonnes per year, from 1950 through to 2015. In 1950
              the world produced only 2 million tonnes per year. Since then,
              annual production has increased nearly 200-fold, reaching 381
              million tonnes in 2015. For context, this is roughly equivalent to
              the mass of two-thirds of the world population. The short downturn
              in annual production in 2009 and 2010 was predominantly the result
              of the 2008 global financial crisis — a similar dent is seen
              across several metrics of resource production and
              consumption, including energy.
            </p>
            <h3>Problems that will be faced in future!!</h3>
            <ul>
              <li>
                It may lead to huge heap of plastic waste, clogging the ocean or
                water bodies hampering the aquatic life.
              </li>
              <li>
                As plastics take a lot of time to degrade by soil thus it leads
                to soil erosion or land sliding and hamper the growth of
                vegetation.
              </li>
              <li>
                These plastic waste when burnt in large quantity can expose
                several toxins into the air, land or water polluting allover the
                environment.
              </li>
            </ul>
          </div>
          <div className="dyk">
            <img src={dyk} alt="" width={350} />
            <div className="lists">
              <ul>
                <li>
                  Every day approximately 8 million pieces of plastic pollution
                  find their way into our oceans.
                </li>
                <li>
                  12 million tonnes of plastic are poured into the ocean every
                  year.
                </li>
                <li>
                  India generates 9.46 million tonnes of plastic waste annually,
                  of which 40 per cent remains uncollected and 43 per cent is
                  used for packaging, most of which is single-use.
                </li>
                <li>
                  India consumes an estimated 16.5 million tonnes, about 1.6
                  million truckful's, of plastic annually, as per this June 2018
                  report in Down to Earth that cites data provided by
                  Plast-India Foundation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FocusStyled>
  );
};
export const FocusStyled = styled.div`
  .focus-con {
    width: 90%;
    margin: 0 auto;
    h1 {
      text-align: center;
      margin-top: 2rem;
      color: #024731;
      text-transform: uppercase;
    }
    .plastic-con {
      border-top: 3px solid black;
      width: 100%;
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background-color: #eeeeee;
      .about {
        width: 70%;
        border-radius: 20px;
        background-image: url(${plastic});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        background-color: white;
        box-shadow: 5px 10px #888888;
        h2 {
          text-align: center;
          text-transform: uppercase;
          font-size: 2rem;
          color: #1c8200;
        }
        p {
          margin: 1rem 3rem;
          font-size: 1.2rem;
          font-weight: 500;
        }
        h3 {
          margin-top: 2rem;
          margin-left: 3rem;
          font-size: 1.5rem;
          color: #024731;
        }
        ul {
          margin: 0 3rem;
          margin-bottom: 2rem;
          li {
            font-size: 1.2rem;
            font-weight: 500;
            list-style-type: square;
          }
        }
      }
      .dyk {
        width: 30%;
        height: fit-content;
        background-color: white;
        border-radius: 20px;
        box-shadow: 5px 10px #888888;
        img {
          display: block;
          margin: 0 auto;
        }
        .lists {
          margin: 0 2rem;
          ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li {
              font-size: 1.2rem;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
`;
