import { useState, useEffect } from "react";

import SummaryContent from "./SummaryContent";
import {
  SummaryContainer,
  SummaryTabs,
  SchoolTab,
  InstitutionsTab,
} from "./summaryIndexStyled";
import { summaryData } from "./SummaryData";

const SummaryIndex = () => {
  const [summaryFirstTabShows, setSummaryFirstTabShows] = useState(true);
  const [summaryTabsData, setSummaryTabsData] = useState();
  useEffect(() => {
    setSummaryTabsData(summaryData);
  }, []);

  const handleClick = () => {};

  return summaryTabsData ? (
    <SummaryContainer>
      <SummaryTabs>
        <SchoolTab onClick={() => handleClick()}>
          <h5>For schools</h5>
        </SchoolTab>
        <InstitutionsTab onClick={() => handleClick()}>
          <h5>For institutions</h5>
          <h6>And parishes</h6>
        </InstitutionsTab>
      </SummaryTabs>
      {summaryFirstTabShows ? (
        <SummaryContent summaryData={summaryTabsData.school} />
      ) : (
        <SummaryContent summaryData={summaryTabsData.institutions} />
      )}
    </SummaryContainer>
  ) : (
    "Loading ..."
  );
};

export default SummaryIndex;
