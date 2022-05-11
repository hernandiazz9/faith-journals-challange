import { SumaryContentContainer,SumaryContentTabs } from "./sumaryContentStyled";

const SumaryContent = () => {
  return (
    <SumaryContentContainer>
      <p>
        Faith Journals is a collaborative writing software that uses a creative
        pedagogy that has been proven to inspire students to write about Sacred
        Scripture and grow closer to God, while simultaneously enhancing their
        writing proficiency.
      </p>
      <SumaryContentTabs>
        <div>Read</div>
        <div>Reflect & write</div>
        <div>Grow</div>
      </SumaryContentTabs>
      <div></div>
    </SumaryContentContainer>
  );
};

export default SumaryContent;
