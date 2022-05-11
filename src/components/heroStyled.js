import styled from "@emotion/styled";

export const HeroContainer = styled.div`
  max-width: 1400px;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 20vh 0 0;
`;

export const HeroTitle = styled.h1`
  color: #064149;

  font-weight: 700;
  max-width: 950px;
  width: 80vw;
  font-size: 55px;
  margin-bottom: 10px;
`;

export const HeroSubTitle = styled.h6`
  width: 650px;
  margin: 20px 0 40px;
  max-width: 750px;
  font-size: 33px;
  color: #064149;
  font-family: "DM Sans", sans-serif;
  font-weight: 300;
`;

export const HeroButton = styled.button`
  color: #fff;
  background-color: #fd7d73;
  border-radius: 50px;
  border: 1px solid #fd7d73;
  margin: 0 15px 0 0;
  font-size: 19px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease-out;
  padding: 10px 20px;
  :hover{
    background-color: #e45044;
  }
`;

export const ImgTabletHero = styled.img`
  position: relative;
  top: 80px;

`
