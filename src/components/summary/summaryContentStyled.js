import styled from "@emotion/styled";

export const SummaryContentContainer = styled.div`
  width: 80vw;
  max-width: 950px;
  margin: 50px auto;
  p {
    font-size: 16px;
    line-height: 30px;
    color: #064149;
    font-family: "DM Sans", sans-serif;
    font-weight: 300;
  }
`;

export const SummaryContentSubTabs = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const TabStyleContainer = styled.div`
  height: 90px;
  width: ${(props) => (props.isSchool ? "30%" : "18%")};
  margin: ${(props) => (props.isSchool ? "0 10px 20px" : "0 5px 20px")};
  max-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 0 20px;
  cursor: pointer;
  opacity: 0.6;
  border: 1px solid transparent;
  transition: border-color 0.3s ease;
  box-shadow: 0 0 0 2px transparant;
  opacity: 1;
  box-shadow: ${(props) => props.tagSelected && "0 0 0 2px #064149"};

  :hover {
    border-color: #064149;
  }
`;

export const TagStyle = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  img {
    height: 35px;
    margin-right: 10px;
  }
  h6 {
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    color: #064149;
  }
`;

export const ProgressBarStyled = styled.div`
  margin-top: 10px;
  height: 6px;
  width: 100%;
  border-radius: 10px;
  background-color: #e9e9e9;
`;

export const ProgressBar = styled.div`
  background-color: red;
  width: ${(props) => `${props.widthBar}%`};
  height: 100%;
`;
export const TabsContent = styled.div`
  width: 85vw;
  max-width: 1000px;
  position: relative;
  height: 400px;
  margin: 0 auto 100px;
`;
export const TabsContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px auto;
  /* opacity: 0; */
  box-sizing: border-box;
  padding: 0;
  transition: all 0.8s ease-in;
`;
export const TabImg = styled.div`
  width: 50%;
  max-width: 550px;
  img {
    width: 100%;
  }
`;
export const TabText = styled.div`
  text-align: left;
  width: 50%;
  box-sizing: border-box;
  padding: 0 7%;
  color: #064149;
  h4 {
    margin: 20px 0;
    font-size: 50px;
    line-height: 55px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    font-weight: 300;
  }
`;
