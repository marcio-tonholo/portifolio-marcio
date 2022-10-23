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
import { projects } from "../../components/projectCard/projects";

function HomePage() {
  return (
    <>
      <Header />
      <AboutMe bgimage={star}>
        <div>
          <h4>Sobre Mim</h4>
          <p>
            Minha conexão com a tecnologia começou desde cedo, sempre tive
            facilidade e gostei da área, foi então que em setembro de 2021
            comecei um curso de 2000 horas sobre desenvolvimento full-stack na
            Kenzie Academy Brasil, onde me dediquei a aprender tudo oque me
            disponibilizaram. Meu objetivo é me tornar um bom desenvolvedor com
            muito conhecimento sobre as tecnologias mais usadas no mercado.
          </p>
        </div>
      </AboutMe>
      <Porjectscontainer bgimage={star}>
        <h4>Meus Projetos</h4>
        <div className="projectCards">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index}></ProjectCard>
          ))}
        </div>
      </Porjectscontainer>
      <Stackscontainer>
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
