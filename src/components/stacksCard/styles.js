import styled from "styled-components";

export const StackCard = styled.div`
  min-width: 10.25rem;
  max-width: 10.25rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--blue);
  box-shadow: 0px 0px 5px var(--purple);
  margin: 30px;
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
    font-family: var(--ff-heading);
    color: var(--white);
    opacity: 0;
    position: absolute;
    transform: translateY(-15%);
    background: var(--fixedblack);
    padding: 0.4rem 1rem;
    border-radius: 4px;
    text-align: center;
    font-size: 12px;
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
      border-top: 25px solid var(--fixedblack);
      transform: translateX(-50%);
      left: 50%;
    }
  }
  :hover {
    box-shadow: 0px 0px 8px var(--purple);

    p {
      margin-top: -40px;
      opacity: 1;
      transform: translateY(-200%);
      animation: scaleUp 200ms;
    }
  }
  @media (max-width: 800px) {
    margin: 15px 5px;
    min-width: 9rem;
    max-width: 9rem;
  }
`;
