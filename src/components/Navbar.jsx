import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="nav-con">
        <div className="brand">
          <h1>CleanEarth</h1>
        </div>
        <div className="search-con">
          <input type="text" placeholder="Enter text here..." />
          <BsSearch />
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </NavbarStyled>
  );
};

export const NavbarStyled = styled.div`
  .nav-con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: white;
    .brand {
      padding-left: 2rem;
      color: #024731;
    }
    .search-con {
      width: 40%;
      display: flex;
      align-items: center;
      border: 1px solid #024731;
      border-radius: 10px;
      input {
        padding: 0.5rem 1rem;
        border-radius: 10px;
        border: none;
        width: 100%;
        font-size: 1.2rem;
        &:focus {
          outline: none;
        }
      }
      svg {
        width: 2rem;
        font-size: 1.2rem;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .links {
      padding-right: 2rem;
      margin-left: -4rem;
      ul {
        display: flex;
        gap: 2rem;
        li {
          list-style-type: none;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          color: #024731;
          font-weight: 500;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;
