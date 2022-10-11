import { CardContainer, Content } from "./styles";
import image from "../../assets/projects_imgs/kenzievan.png";

function ProjectCard() {
  return (
    <CardContainer image={image}>
      <Content>
        <h4>Motor Shop</h4>
        <ul>
          <li>
            <p>Tecnologias usadas:</p>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Content>
    </CardContainer>
  );
}
export default ProjectCard;
