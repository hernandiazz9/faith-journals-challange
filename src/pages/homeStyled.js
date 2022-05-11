import styled from "@emotion/styled";

export const HomeSection = styled.div`
  max-width: 100vw;
  height: 100vh;
`;

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: ${(props) => (props.scrollReached ? "0px" : "55px")};
  padding-bottom: 50px;
  transition: all 0.3s ease-in-out;
  margin-bottom: 150px;
`;
export const ImgLeft = styled.img`
  height: auto;
  position: absolute;
  top: 43%;
  right: 78%;
  width: 400px;
`;
export const ImgRight = styled.img`
  height: auto;
  position: absolute;
  top: 43%;
  width: 330px;
  left: 78%;
`;

export const SummarySection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;
