import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #111416;
  color: var(--white);
  box-shadow: var(--blue) 2px 2px 5px;
  padding: 25px;
  height: 100px;
  width: 100%;
  position: fixed;

  div {
    display: flex;
    align-items: center;
    width: 65%;
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

  a {
    display: flex;
    align-items: center;
    width: 80px;
    height: 100px;
    padding: 2px;

    title {
      background-color: #ccc;
    }
    :hover {
      border-bottom: 3px solid var(--blue);

      svg {
        animation: shake 0.2s;
        animation-iteration-count: 2;
      }
    }
  }
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
`;
