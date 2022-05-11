import {
  HeroContainer,
  HeroTitle,
  HeroButton,
  HeroSubTitle,
  ImgTabletHero,
} from "./heroStyled";
import tabletPhoto from "../assets/image/tablet_photo.png";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Growing our relationship with God</HeroTitle>
      <HeroSubTitle>
        A <i>simple</i> and <i>personalized</i> solution for religious education
        and faith formation
      </HeroSubTitle>
      <HeroButton>Speak with us</HeroButton>
      <ImgTabletHero src={tabletPhoto} alt="tablet-hero" />
    </HeroContainer>
  );
};

export default Hero;
