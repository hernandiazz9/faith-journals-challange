import {
  NavBarStyle,
  Links,
  Link,
  RegistrationButton,
} from "./navBarStyled";
import faithLogo from "../assets/image/faith_logo_.svg";

const NavBar = ({scrollReached}) => {
  return (
    <NavBarStyle scrollReached={scrollReached}>
      <div>
        <img src={faithLogo} alt="faith-logo" />
      </div>
      <Links>
        <Link href="/#">About Us</Link>
        <Link href="/#">Schools</Link>
        <Link href="/#">Parishes/Institutions</Link>
        <Link href="/#">Bookstore</Link>
      </Links>
      <div>
        <Link href="/#">Log in</Link>
        <RegistrationButton href="/#">Getin Started</RegistrationButton>
      </div>
    </NavBarStyle>
  );
};

export default NavBar;
