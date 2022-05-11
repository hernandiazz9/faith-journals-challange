import churchImg from "../assets/image/church-home.png";
import shoolImg from "../assets/image/school-home.png";

import { HomeContainer } from "./homeStyled";


const Home = () => {
  return (
    <HomeContainer>
      <img src={churchImg} alt="church-home" />

      <img src={shoolImg} alt="shool-home" />
    </HomeContainer>
  );
};

export default Home;
