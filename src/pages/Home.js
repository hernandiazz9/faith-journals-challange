import churchImg from "../assets/image/church-home.png";
import shoolImg from "../assets/image/school-home.png";
import Hero from "../components/Hero";
import SummaryIndex from "../components/summary/SummaryIndex";

import {
  HeroSection,
  HomeSection,
  ImgLeft,
  ImgRight,
  SummarySection,
} from "./homeStyled";

const Home = ({ scrollReached }) => {
  return (
    <HomeSection>
      <HeroSection scrollReached={scrollReached}>
        <ImgLeft src={churchImg} alt="church-home" />
        <Hero />
        <ImgRight src={shoolImg} alt="shool-home" />
      </HeroSection>
      <SummarySection>
        <SummaryIndex />
      </SummarySection>
    </HomeSection>
  );
};

export default Home;
