import styled from "styled-components";

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 548px;
  color: var(--white);
  box-shadow: var(--black) 2px 2px 5px;
  ${({ bgimage }) =>
    `
  background: url("${bgimage}") no-repeat ;
  `};
  background-size: cover;
  h2 {
    font-family: var(--ff-heading);
    font-size: 40px;
    margin-bottom: 10px;
  }
  p {
    font-size: 23px;
  }
  div {
    padding-left: 65px;
    width: 45%;
  }
`;

export const Stacks = styled.div`
  background-color: var(--fixedblack);
  width: 100%;
  height: 300px;
  box-shadow: 0px 0px 3px #303030;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
