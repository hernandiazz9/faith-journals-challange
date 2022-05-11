import {
  SummaryContainer,
  SummaryTabs,
  SchoolTab,
  InstitutionsTab,
} from "./summaryIndexStyled";

const SummaryIndex = () => {
  return (
    <SummaryContainer>
      <SummaryTabs>
        <SchoolTab>
          <h5>For schools</h5>
        </SchoolTab>
        <InstitutionsTab>
          <h5>For institutions</h5>
          <h6>And parishes</h6>
        </InstitutionsTab>
      </SummaryTabs>

      <div>resto</div>
    </SummaryContainer>
  );
};

export default SummaryIndex;
