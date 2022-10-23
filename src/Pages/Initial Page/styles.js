import styled from "styled-components";

export const Title = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  h1,
  h2,
  h3 {
    font-family: var(--ff-heading);
    color: var(--blue);
    text-shadow: var(--purple) 2px 3px 6px;
    font-weight: bold;
    line-height: 50px;
  }
  h1 {
    font-size: 35px;
    ${({ active1 }) =>
      active1 &&
      `
   ::after {
    margin-left: -8px;
    content: "|";
    animation: blink 1s step-start infinite;
  }

  `}
    @media (max-width:800px) {
      font-size: 25px;
      text-align: center;
      padding: 0 10px;
    }
  }

  h2 {
    font-size: 30px;
    ${({ active2 }) =>
      active2 &&
      `
   ::after {
    margin-left: -8px;
    content: "|";
    animation: blink 1s step-start infinite;
  }

  `} @media (max-width:800px) {
      font-size: 25px;
      text-align: center;
      padding: 0 10px;
    }
  }
  h3 {
    font-size: 20px;
    ${({ active3 }) =>
      active3 &&
      `
   ::after {
    margin-left: -5px;
    content: "|";
    animation: blink 1s step-start infinite;
  }

  `} @media (max-width:800px) {
      font-size: 25px;
      text-align: center;
      padding: 0 10px;
    }
  }
  button {
    font-family: var(--ff-heading);
    margin-top: 15px;
    padding: 8px;
    border-radius: 4px;
    border: none;
    color: var(--white);
    background-color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    box-shadow: var(--purple) 2px 3px 6px;
  }
`;

export const StarVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1000;
`;
