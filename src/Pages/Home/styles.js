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
    `  background-image: linear-gradient(to top, transparent 0%,#166fb7 250%), url(${bgimage});`};

  background-size: cover;

  h4 {
    font-family: var(--ff-heading);
    font-size: 25px;
    margin-bottom: 10px;
  }
  p {
    font-size: 23px;
  }
  div {
    padding-left: 50px;
    width: 45%;
  }
`;

export const Porjectscontainer = styled.div`
  width: 100%;

  ${({ bgimage }) =>
    `
  background: url("${bgimage}") no-repeat ;
  `};
  background-size: cover;

  div {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  h4 {
    color: var(--white);
    font-family: var(--ff-heading);
    text-shadow: var(--black) 2px 2px 3px;
    font-size: 25px;
    padding: 10px 50px 15px 50px;
  }
`;

export const Stackscontainer = styled.div`
  background-color: var(--fixedblack);
  width: 100%;
  box-shadow: 0px -2px 5px var(--fixedblack);

  h4 {
    color: var(--white);
    font-family: var(--ff-heading);
    text-shadow: var(--black) 2px 2px 3px;
    font-size: 25px;
    padding: 30px 50px;
  }

  div {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
