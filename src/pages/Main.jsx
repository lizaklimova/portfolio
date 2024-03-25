import { IoDownloadOutline } from "react-icons/io5";
import { MainContainer } from "layouts";
import {
  DownloadButton,
  MainPageSection,
  SocialsDownloadWrap,
  TitlesBlock,
} from "./Pages.styled";
import SocialsList from "components/SocialsList/SocialsList";

const Main = () => {
  const downloadCV = () => {
    const pdfURL = "CV_Klymova_Elizabeth_Front-end.pdf";
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "CV_Klymova_Elizabeth_Front-end.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MainPageSection $variant="main">
      <MainContainer>
        <TitlesBlock>
          <h1>Elizabeth Klymova</h1>
          <h2>Front-end Developer</h2>
        </TitlesBlock>

        <SocialsDownloadWrap>
          <SocialsList />

          <DownloadButton type="button" onClick={downloadCV}>
            Download CV
            <IoDownloadOutline size={20} />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </DownloadButton>
        </SocialsDownloadWrap>
      </MainContainer>
    </MainPageSection>
  );
};

export default Main;
