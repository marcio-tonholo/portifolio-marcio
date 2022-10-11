import styled from "styled-components";

export const StackCard = styled.div`
  min-width: 10.25rem;
  max-width: 10.25rem;
  border-radius: 8px;
  padding: 1rem;
  background-color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    @keyframes scaleUp {
      0% {
        transform: translateY(15%);
      }
      100% {
        transform: translateY(-140%);
      }
    }
    opacity: 0;
    position: absolute;
    transform: translateY(-15%);
    background: var(--white);
    padding: 0.4rem 1rem;
    border-radius: 4px;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    white-space: nowrap;

    ::before {
      content: "";
      z-index: -1;
      bottom: -5px;
      position: absolute;
      width: 0px;
      height: 0px;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-top: 25px solid var(--white);
      transform: translateX(-50%);
      left: 50%;
    }
  }
  :hover {
    p {
      margin-top: -40px;
      opacity: 1;
      transform: translateY(-200%);
      animation: scaleUp 200ms;
    }
  }
`;
