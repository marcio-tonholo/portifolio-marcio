import Header from "../../components/header";
import { Stack } from "../../components/stacksCard";
import ProjectCard from "../../components/projectCard";
import { stackData } from "../../components/stacksCard/stacks";
import {
  AboutMe,
  Porjectscontainer,
  Stackscontainer,
  Certificates,
  StyledFooter,
} from "./styles";
import star from "../../assets/videos/stars.gif";
import frontEnd from "../../assets/imgs/certificadofrontend.png";
import fullStack from "../../assets/imgs/certificadofullstack.png";

function HomePage() {
  return (
    <>
      <Header />
      <AboutMe bgimage={star}>
        <div>
          <h4>Sobre Mim</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sunt
            quisquam placeat, eius ea illo cupiditate vel accusamus ducimus?
            Repudiandae laudantium excepturi alias et a aliquid asperiores esse,
            veritatis officiis!
          </p>
        </div>
      </AboutMe>
      <Porjectscontainer bgimage={star}>
        <h4>Meus Projetos</h4>
        <div>
          {[1, 52, 26, 36, 46, 56].map((index) => (
            <ProjectCard key={index}></ProjectCard>
          ))}
        </div>
      </Porjectscontainer>
      <Stackscontainer bgimage={star}>
        <h4>Tecnologias que usei</h4>
        <div>
          {stackData.map((stack, index) => (
            <Stack key={index} title={stack.title} Icon={stack.img} />
          ))}
        </div>
      </Stackscontainer>
      <Certificates>
        <h4>Certificados na área</h4>
        <div>
          <img src={frontEnd} alt="Diploma Front-End" />
          <img src={fullStack} alt="Diploma Full-Stack" />
        </div>
      </Certificates>
      <StyledFooter>
        <a
          target="blank"
          href="https://www.linkedin.com/in/marcio-jose-tonholo/"
        >
          Made by @MJTSJ
        </a>
      </StyledFooter>
    </>
  );
}
export default HomePage;
