import { CardContainer, ModalContent, Modal } from "./styles";
import { SiReact, SiGithub } from "react-icons/si";
import { useState } from "react";

function ProjectCard({ project }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <CardContainer
        image={project.img}
        onClick={() => setModal(true)}
      ></CardContainer>
      {modal && (
        <Modal
          id="Modal"
          onClick={(e) => (e.target.id === "Modal" ? setModal(false) : null)}
        >
          <ModalContent>
            <span>
              <h5>{project.title}</h5>
              <p onClick={() => setModal(false)}>X</p>
            </span>
            <p>{project.description}</p>

            <div>
              <a href={project.link} target="blank">
                <SiReact /> App
              </a>
              <a href={project.github} target="blank">
                <SiGithub /> Github
              </a>
            </div>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
export default ProjectCard;
