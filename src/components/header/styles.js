import styled from "styled-components";

export const StyledHeader = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #111416;
  color: var(--white);
  box-shadow: var(--blue) 0px 2px 5px;
  padding: 0 50px;
  width: 100%;
  position: fixed;
  height: 100px;
  div {
    display: flex;
    align-items: center;
  }
  h4 {
    font-family: var(--ff-heading);
    font-weight: bold;
    font-size: 20px;
    text-shadow: var(--black) 2px 2px 10px;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-right: 15px;
    box-shadow: var(--black) 2px 2px 10px;
  }
  nav {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    position: relative;
    div {
      margin-top: 10px;
    }
    h4 {
      font-size: 15px;
      line-height: 20px;
    }
    nav {
      width: auto;
    }
  }
`;

export const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 100px;
  padding: 2px;
  svg {
    color: var(--white);
    width: 100%;
    height: 25px;
  }

  @keyframes shake {
    0% {
      margin-left: 0;
    }
    25% {
      transform: rotate(20deg);
    }
    50% {
      margin-left: 0;
    }
    75% {
      transform: rotate(-20deg);
    }
    100% {
      margin-left: 0;
    }
  }
  p {
    @keyframes scaleDown {
      0% {
        transform: translateY(250%);
      }
      100% {
        transform: translateY(280%);
      }
    }

    font-weight: bold;
    color: var(--white);
    opacity: 0;
    position: absolute;
    transform: translateY(15%);
    background: var(--fixedblack);
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    font-size: 12px;

    ::before {
      content: "";
      z-index: -1;
      top: -5px;
      position: absolute;
      width: 0px;
      height: 0px;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-bottom: 25px solid var(--fixedblack);
      transform: translateX(-50%);
      left: 50%;
    }
  }
  :hover {
    border-bottom: 3px solid transparent;
    svg {
      animation: shake 0.2s;
      animation-iteration-count: 2;
    }
    p {
      margin-top: -40px;
      opacity: 1;
      transform: translateY(280%);
      animation: scaleDown 200ms;
    }
  }
`;
