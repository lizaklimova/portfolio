import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderSection = styled.header`
  position: sticky;
  width: 100vw;
  height: 70px;
  z-index: 5;
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  border-bottom: 1px solid #fff;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    height: 90px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const HeaderWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
      gap: 30px;
    }
  }
`;

export const NavigationLink = styled(NavLink)`
  position: relative;
  color: var(--text-color);

  &.active {
    color: var(--accent-color);

    &::after {
      position: absolute;
      bottom: -5px;
      display: block;
      content: "";
      width: 100%;
      height: 3px;
      border-radius: 10px;
      background-color: var(--accent-color);
    }
  }
`;
