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

  const handleClick = (isFirst) => {
    setSummaryFirstTabShows(isFirst);
  };

  return summaryTabsData ? (
    <SummaryContainer>
      <SummaryTabs>
        <SchoolTab
          summaryFirstTabShows={summaryFirstTabShows}
          onClick={() => handleClick(true)}
        >
          <h5>For schools</h5>
        </SchoolTab>
        <InstitutionsTab
          summaryFirstTabShows={summaryFirstTabShows}
          onClick={() => handleClick(false)}
        >
          <h5>For institutions</h5>
          <h6>And parishes</h6>
        </InstitutionsTab>
      </SummaryTabs>

      <SummaryContent
      summaryFirstTabShows={summaryFirstTabShows}
        summaryData={
          summaryFirstTabShows
            ? summaryTabsData.school
            : summaryTabsData.institutions
        }
      />
    </SummaryContainer>
  ) : (
    "Loading ..."
  );
};

export default SummaryIndex;
