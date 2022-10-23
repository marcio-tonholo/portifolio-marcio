import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 10px;
  border-radius: 10px;
  width: 325px;
  height: 200px;
  margin: 30px 30px 30px 15px;
  ${({ image }) =>
    `
  background: url("${image}") no-repeat ;
  `}
  background-size: cover;
  border: 2px solid var(--blue);
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 15px var(--purple);
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  backdrop-filter: blur(1.5px);
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 0%,
    #166fb7 250%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  @keyframes toTop {
    from {
      transform: translatey(100px);
    }
    to {
      transform: translatey(0px);
    }
  }
  animation: toTop 1s;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  width: 325px;
  box-shadow: 3px 3px 3px var(--black);
  background-color: var(--fixedblack);
  transition: all 0.3s ease;
  color: var(--white);
  h5 {
    font-size: 20px;
    margin: 10px 0;
    font-family: var(--ff-heading);
  }
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      width: 20px;
      font-family: var(--ff-heading);
      cursor: pointer;
    }
  }
  p {
    width: 100%;
    margin-bottom: 10px;
    line-height: 30px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--blue);
      padding: 10px;
      border-radius: 5px;
      width: 45%;
      svg {
        width: 30px;
        height: 20px;
        margin: 0 5px;
      }
      cursor: pointer;
      :hover {
        box-shadow: 0px 0px 4px var(--purple);
      }
    }
  }
  @media (max-width: 800px) {
    width: 90%;
  }
`;
