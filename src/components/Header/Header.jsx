import { MainContainer } from "layouts";
import SocialsList from "components/SocialsList";
import {
  HeaderSection,
  HeaderWrap,
  Navigation,
  NavigationLink,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderSection>
      <MainContainer>
        <HeaderWrap>
          <Navigation>
            <ul>
              <li>
                <NavigationLink to="/">Home</NavigationLink>
              </li>
              <li>
                <NavigationLink to="/about">About me</NavigationLink>
              </li>
              <li>
                <NavigationLink to="/resume">Resume</NavigationLink>
              </li>
              <li>
                <NavigationLink to="/projects">Projects</NavigationLink>
              </li>
            </ul>
          </Navigation>

          <SocialsList variant="header" />
        </HeaderWrap>
      </MainContainer>
    </HeaderSection>
  );
};

export default Header;
