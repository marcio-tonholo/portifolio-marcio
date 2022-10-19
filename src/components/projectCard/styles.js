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
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  opacity: 0%;
  transition: opacity 1.5s;

  :hover {
    opacity: 100%;
  }
  width: 325px;
  height: 200px;
  background-color: rgba(30, 30, 30, 0.75);

  color: var(--white);

  h4 {
    font-family: var(--ff-heading);
  }
`;
