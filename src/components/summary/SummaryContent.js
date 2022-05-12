import { Fragment, useState, useEffect } from "react";

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

const SummaryContent = ({ summaryData, summaryFirstTabShows }) => {
  const { subHead, subTags } = summaryData;
  const [tagSelected, setTagSelected] = useState(subTags[0]);

  const handleClick = (tag) => {
    setTagSelected(tag);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setTagSelected((tag) =>
        tag.id === subTags.length ? subTags[0] : subTags[tag.id]
      );
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [subTags, tagSelected]);

  useEffect(() => {
    setTagSelected(subTags[0]);
  }, [summaryFirstTabShows, subTags]);

  // setInterval(() => {
  //   if(widthBar>100){
  //     widthBar = 0
  //   }
  //   console.log(widthBar);
  //   widthBar++;
  // }, 1000);

  return (
    <SummaryContentContainer>
      <p>{subHead && subHead}</p>
      <SummaryContentSubTabs>
        {subTags.map((tag) => (
          <Fragment key={tag.id}>
            <TabStyleContainer
              isSchool={summaryData.name === "school"}
              onClick={() => handleClick(tag)}
              tagSelected={tagSelected.id === tag.id}
            >
              <TagStyle>
                {tag.imageName ? (
                  <img src={tag.imageName} alt={tag.nameTag} />
                ) : null}
                <h6>{tag.nameTag}</h6>
              </TagStyle>
              <ProgressBarStyled>
                <div
                  style={{
                    width: `${tagSelected.id === tag.id ? "100%" : "0"}`,
                    height: "100%",
                    backgroundColor: `red`,
                  }}
                />
              </ProgressBarStyled>
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
