import styled from "@emotion/styled";

export const SummaryContainer = styled.div`
  width: 95vw;
  max-width: 1200px;
  min-height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 60px 40px;
`;

export const SummaryTabs = styled.div`
  width: 700px;
  display: flex;
  justify-content: center;
  div {
    height: 90px;
    width: 300px;
    border: 1px solid #d2d2d2;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 0 5px;
    text-align: left;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;

    :before {
      content: "";
      height: 100px;
      width: 105px;
      transform: rotate(-10deg);
      position: absolute;
      bottom: -20px;
      right: 20px;
    }
    h5 {
      color: #064149;
      font-weight: 700;
      font-size: 24px;
      margin: 0;
    }
  }
`;
export const SchoolTab = styled.div`
  :before {
    background: url("https://faith-journals.com/static/media/school.9a332bb9.svg")
      no-repeat 50% / contain;
  }
`;
export const InstitutionsTab = styled.div`
  :before {
    background: url("https://faith-journals.com/static/media/church_coloured.dbbfb4c4.png")
      no-repeat 50% / contain;
  }
  h6 {
    font-size: 17px;
    margin: 0;
    font-weight: 700;
    color: #82a0a4;
  }
`;
