import { MainContainer } from "layouts";
import ResumeBlock from "components/ResumeBlock";
import Contacts from "components/ResumeBlock/Contacts";
import Education from "components/ResumeBlock/Education";
import Languages from "components/ResumeBlock/Languages";
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
            <ResumeBlock title="contacts">
              <Contacts />
            </ResumeBlock>
            <ResumeBlock title="contacts">
              <Contacts />
            </ResumeBlock>
            <ResumeBlock title="contacts">
              <Contacts />
            </ResumeBlock>
          </MainPart>
        </ResumeWrap>
      </MainContainer>
    </ResumeSection>
  );
};

export default Resume;
