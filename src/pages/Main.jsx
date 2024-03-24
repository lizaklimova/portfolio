import { MainContainer } from "layouts";
import { MainPageSection, TitlesBlock } from "./Pages.styled";
import SocialsList from "components/SocialsList/SocialsList";

const Main = () => {
  return (
    <MainPageSection>
      <MainContainer>
        <TitlesBlock>
          <h1>Elizabeth Klymova</h1>
          <h2>Front-end Developer</h2>
        </TitlesBlock>

        <div>
          <SocialsList />

          {/* <a
            href="../assets/cv/CV_Klymova_Elizabeth_Front-end.pdf"
            download
            target="_blank"
          >
            Download CV
          </a> */}
        </div>
      </MainContainer>
    </MainPageSection>
  );
};

export default Main;
