import Header from "../../components/header";
import { AboutMe, Porjectscontainer, Stackscontainer } from "./styles";
import { Stack } from "../../components/stacksCard";
import star from "../../assets/videos/stars.gif";
import { stackData } from "../../components/stacksCard/stacks";
import ProjectCard from "../../components/projectCard";

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
          {[1, 52, 6, 6, 6, 6].map(() => (
            <ProjectCard></ProjectCard>
          ))}
        </div>
      </Porjectscontainer>
      <Stackscontainer>
        <h4>Tecnologias que usei</h4>
        <div>
          {stackData.map((stack, key) => (
            <Stack key={key} title={stack.title} Icon={stack.img} />
          ))}
        </div>
      </Stackscontainer>
    </>
  );
}
export default HomePage;
