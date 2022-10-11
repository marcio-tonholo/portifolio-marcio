import Header from "../../components/header";
import { AboutMe, Stacks } from "./styles";
import { Stack } from "../../components/tecs";
import star from "../../assets/videos/stars.gif";
import { IoMdRocket } from "react-icons/io";

function HomePage() {
  return (
    <>
      <Header />
      <AboutMe bgimage={star}>
        <div>
          <h2>Sobre Mim</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sunt
            quisquam placeat, eius ea illo cupiditate vel accusamus ducimus?
            Repudiandae laudantium excepturi alias et a aliquid asperiores esse,
            veritatis officiis!
          </p>
        </div>
      </AboutMe>
      <Stacks>
        <Stack title="peixe" Icon={IoMdRocket} />
      </Stacks>
    </>
  );
}
export default HomePage;
