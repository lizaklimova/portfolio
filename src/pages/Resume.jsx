import { MainContainer } from "layouts";
import ResumeBlock from "components/ResumeBlock";
import Contacts from "components/ResumeBlock/Contacts";
import Education from "components/ResumeBlock/Education";
import Languages from "components/ResumeBlock/Languages";
import Skills from "components/ResumeBlock/Skills";
import {
  AsidePart,
  MainPart,
  Name,
  ResumeSection,
  ResumeWrap,
  Specialty,
} from "./Pages.styled";

const Resume = () => {
  return (
    <ResumeSection>
      <MainContainer>
        <Name>Elizabeth Klymova</Name>
        <Specialty>Front-end developer</Specialty>

        <ResumeWrap>
          <AsidePart>
            <ResumeBlock title="contacts">
              <Contacts />
            </ResumeBlock>
            <ResumeBlock title="education">
              <Education />
            </ResumeBlock>
            <ResumeBlock title="languages">
              <Languages />
            </ResumeBlock>
          </AsidePart>

          <MainPart>
            <ResumeBlock title="skills">
              <Skills />
            </ResumeBlock>
          </MainPart>
        </ResumeWrap>
      </MainContainer>
    </ResumeSection>
  );
};

export default Resume;
