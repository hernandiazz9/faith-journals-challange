
import churchImg from "../assets/image/church-home.png";
import shoolImg from "../assets/image/school-home.png";
import Hero from "../components/Hero";

import { HeroSection, HomeSection, ImgLeft, ImgRight } from "./homeStyled";

const Home = ({scrollReached}) => {
 

  return (
    <HomeSection >
      <HeroSection scrollReached={scrollReached}>
        <ImgLeft src={churchImg} alt="church-home" />
        <Hero />
        <ImgRight src={shoolImg} alt="shool-home" />
      </HeroSection>
    </HomeSection>
  );
};

export default Home;
