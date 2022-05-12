import { SummaryContentContainer,SummaryContentTabs } from "./summaryContentStyled";

const SummaryContent = () => {
  return (
    <SummaryContentContainer>
      <p>
        Faith Journals is a collaborative writing software that uses a creative
        pedagogy that has been proven to inspire students to write about Sacred
        Scripture and grow closer to God, while simultaneously enhancing their
        writing proficiency.
      </p>
      <SummaryContentTabs>
        <div>Read</div>
        <div>Reflect & write</div>
        <div>Grow</div>
      </SummaryContentTabs>
      <div></div>
    </SummaryContentContainer>
  );
};

export default SummaryContent;
