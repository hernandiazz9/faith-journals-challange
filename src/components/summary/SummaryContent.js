import { Fragment, useState } from "react";

import {
  SummaryContentContainer,
  SummaryContentSubTabs,
  TabStyleContainer,
  TagStyle,
  ProgressBarStyled,
  TabsContent,
  TabsContentContainer,
  TabImg,
  TabText,
} from "./summaryContentStyled";

const SummaryContent = ({ summaryData }) => {
  const { subHead, subTags } = summaryData;
  const [tagSelected, setTagSelected] = useState(subTags[0]);

  const handleClick = (tag) => {
    setTagSelected(tag);
  };
  console.log(tagSelected);

  return (
    <SummaryContentContainer>
      <p>{subHead && subHead}</p>
      <SummaryContentSubTabs>
        {subTags.map((tag) => (
          <Fragment key={tag.id}>
            <TabStyleContainer onClick={() => handleClick(tag)}>
              <TagStyle>
                <img src={tag.imageName} alt={tag.nameTag} />
                <h6>{tag.nameTag}</h6>
              </TagStyle>
              <ProgressBarStyled />
            </TabStyleContainer>
          </Fragment>
        ))}
      </SummaryContentSubTabs>

      <TabsContent>
        <TabsContentContainer>
          <TabImg>
            <img src={tagSelected.imgTab} alt="" />
          </TabImg>
          <TabText>
            <h4>{tagSelected.nameTag}</h4>
            <p>{tagSelected.description}</p>
          </TabText>
        </TabsContentContainer>
      </TabsContent>
    </SummaryContentContainer>
  );
};

export default SummaryContent;
