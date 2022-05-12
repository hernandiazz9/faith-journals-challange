import SummaryContent from "./SummaryContent";
import {
  SummaryContainer,
  SummaryTabs,
  SchoolTab,
  InstitutionsTab,
} from "./summaryIndexStyled";
import { summarySchoolsData } from "./SummaryData";
import { summaryInstitutions } from "./SummaryData";

const SummaryIndex = () => {

  const handleClick = () =>{
    
  }

  return (
    <SummaryContainer>
      <SummaryTabs>
        <SchoolTab onClick={handleClick}>
          <h5>For schools</h5>
        </SchoolTab>
        <InstitutionsTab>
          <h5>For institutions</h5>
          <h6>And parishes</h6>
        </InstitutionsTab>
      </SummaryTabs>

      <SummaryContent />
    </SummaryContainer>
  );
};

export default SummaryIndex;
