import { MainContainer } from "layouts";
import myPic from "assets/images/me.png";
import {
  AboutDecor,
  AboutText,
  AboutTextWrap,
  AboutTitle,
  DecorWrap,
  MainPageSection,
  MobileImage,
} from "./Pages.styled";

const About = () => {
  return (
    <MainPageSection>
      <MainContainer>
        <DecorWrap>
          <MobileImage src={myPic} alt="author" />
          <AboutDecor />
        </DecorWrap>
        <AboutTextWrap>
          <AboutTitle>{"< About / >"}</AboutTitle>
          <AboutText>
            &nbsp; &nbsp; I am a steadfast front-end developer with hands-on
            experience in web development and an awareness of writing clean,
            efficient, and scalable code. <br />
            &nbsp; &nbsp; Furthermore, I am willing and able to self-educate and
            am always ready to grasp new technologies. <br />
            &nbsp; &nbsp; Moreover, I've had opportunities to take on the role
            of the Team Lead during team projects, enriching my experience. This
            made me get tightly acquainted with Agile/Scrum methodologies and
            Trello
          </AboutText>
        </AboutTextWrap>
      </MainContainer>
    </MainPageSection>
  );
};

export default About;
