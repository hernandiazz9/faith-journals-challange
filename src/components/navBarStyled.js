import styled from "@emotion/styled";

export const NavBarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0.2rem 4rem;
  position: fixed;
  z-index: 15;
  width: 100vw;
  height: ${(props) => (props.scrollReached ? "55px" : "80px")};
  top: 0;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  font-weight: 700;
  background-color: ${(props) => (props.scrollReached ? "#fff" : "#fcf2ea")};
  cursor: pointer;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`;

export const Link = styled.a`
  margin: 0 10px;
  transition: all 0.15s ease-in-out;
  margin: 0 10px;
  padding: 3px 0;
  color: #064149;
  border-bottom: 2px solid transparent;
  font-weight: 500;
  text-decoration: none;
  :hover {
    border-bottom: 2px solid #fd7d73;
  }
`;
export const RegistrationButton = styled.a`
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.15s ease-in-out;
  color: #064149;
  margin: 0;
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid #064149;
  :hover {
    color: #fff;
    background-color: #064149;
  }
`;
