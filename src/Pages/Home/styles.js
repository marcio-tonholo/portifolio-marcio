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
  background-color: #0b0b0b;
  width: 100%;
  border-top: 1px solid var(--blue);
  border-top: 1px solid var(--blue);

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

export const Certificates = styled.section`
  border-top: 2px solid var(--fixedblack);
  border-bottom: 2px solid var(--fixedblack);
  background-color: #101010;
  padding: 10px 50px;

  h4 {
    font-family: var(--ff-heading);
    font-size: 25px;
    margin-bottom: 10px;
    width: 100%;
    color: var(--white);
    text-align: start;
    text-shadow: 2px 2px 5px var(--black);
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    box-shadow: 2px 2px 5px var(--black);
    width: 45%;
    margin: 40px 0;
    border-radius: 8px;
  }
`;

export const StyledFooter = styled.footer`
  background-color: var(--black);
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #333333;
    font-size: 12px;
    text-align: center;
  }
`;
