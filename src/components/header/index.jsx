import { StyledHeader, StyledAnchor } from "./styles";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";

function Header(params) {
  return (
    <StyledHeader>
      <div>
        <img src="https://github.com/marcio-tonholo.png" alt="" />
        <h4>Marcio José Tonholo </h4>
      </div>
      <nav>
        <StyledAnchor
          href="https://api.whatsapp.com/send?phone=+55+5535948596546&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os"
          target="blank"
        >
          <p>Whatsapp</p>
          <BsWhatsapp />
        </StyledAnchor>
        <StyledAnchor
          href="https://www.linkedin.com/in/marcio-jose-tonholo/"
          target="blank"
        >
          <p>Linkedin</p>
          <BsLinkedin />
        </StyledAnchor>
        <StyledAnchor href="https://github.com/marcio-tonholo" target="blank">
          <p>Github</p>
          <BsGithub />
        </StyledAnchor>
      </nav>
    </StyledHeader>
  );
}
export default Header;
