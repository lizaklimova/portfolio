import styled from "styled-components";
import laptopPic from "assets/images/laptop.jpg";
import myPic from "assets/images/me.png";
import {
  fadeInAnimation,
  slideInFromLeft,
  slideInFromRight,
  slideInFromBottom,
} from "assets/styles/CommonStyles";

export const MainPageSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 100vw;
  height: calc(100vh - 70px);
  padding-top: ${({ $variant }) => ($variant === "main" ? "0" : "30px")};
  padding-bottom: 50px;
  background: ${({ $variant }) =>
    $variant === "main"
      ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
    url(${laptopPic}) no-repeat center/cover`
      : `url(${myPic}) no-repeat left/contain`};
  background-size: ${({ $variant }) => ($variant === "main" ? "cover" : "0")};

  @media screen and (min-width: 768px) {
    height: calc(100vh - 90px);
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    background-size: ${({ $variant }) =>
      $variant === "main" ? "cover" : "600px"};
  }
`;

export const DecorWrap = styled.div`
  position: relative;
  animation: ${fadeInAnimation} 3s ease-in-out;
`;

export const AboutDecor = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  width: 100%;
  max-width: 400px;
  height: 350px;
  background: linear-gradient(
    rgba(220, 97, 222, 0.3),
    rgba(164, 130, 167, 0.7)
  );
  border-radius: 50%;
  box-shadow: inset 0 0 50px var(--accent-color);
  filter: drop-shadow(1px 1px 500px var(--accent-color));

  @media screen and (min-width: 768px) {
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const TitlesBlock = styled.div`
  width: 100%;
  max-width: 900px;
  border-radius: 30px;
  border: 1px solid #fff;
  padding: 30px;
  margin: 0 auto 30px auto;
  text-align: left;
  backdrop-filter: blur(15px);
  color: #fff;
  animation: ${fadeInAnimation} 2s ease-in-out;

  h1 {
    position: relative;
    font-size: 30px;

    &::after {
      position: absolute;
      display: block;
      content: "";
      width: 100%;
      height: 3px;
      border-radius: 30px;
      background-color: #fff;
    }

    @media screen and (min-width: 768px) {
      font-size: 60px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 80px;
    }
  }

  h2 {
    font-size: 20px;
    margin-top: 20px;

    @media screen and (min-width: 768px) {
      font-size: 30px;
    }
  }
`;

export const SocialsDownloadWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DownloadButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  gap: 5px;
  border: 3px solid var(--accent-color);
  border-radius: 30px;
  padding: 10px 12px;
  background-color: transparent;
  color: var(--accent-color);
  backdrop-filter: blur(10px);
  overflow: hidden;
  z-index: 2;
  transition: color var(--eased-transition) 0.4s;
  animation: ${slideInFromBottom} 2s ease-in-out;

  @media screen and (min-width: 768px) {
    padding: 15px;
  }

  span {
    position: absolute;
    width: 30%;
    height: 100%;
    background-color: var(--accent-color);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 1s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    visibility: hidden;
    z-index: -1;

    &:nth-child(2) {
      --n: 1;
    }

    &:nth-child(3) {
      --n: 2;
    }

    &:nth-child(4) {
      --n: 3;
    }

    &:nth-child(5) {
      --n: 4;
    }
  }

  @media screen and (min-width: 1440px) {
    &:hover {
      color: #fff;
    }

    &:hover span {
      transform: translateY(0) scale(2);
      visibility: visible;
    }
  }
`;

export const AboutTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    align-items: flex-end;
  }
`;

export const AboutTitle = styled.h3`
  font-size: 50px;
  color: #fff;
  margin-bottom: 10px;
  animation: ${slideInFromLeft} 2s ease-in-out;
`;

export const AboutText = styled.p`
  width: 100%;
  text-align: justify;
  animation: ${slideInFromRight} 2s ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    margin-left: auto;
  }

  @media screen and (min-width: 1440px) {
    font-size: 21px;
    max-width: 850px;
    text-align: right;
  }
`;

export const MobileImage = styled.img`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    height: 500px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ResumeSection = styled.section`
  padding: 30px 0;
`;

export const Name = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  letter-spacing: 2.5px;
  line-height: 1.2;
`;

export const Specialty = styled.h3`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2.15px;
  line-height: 1.4;
  margin-bottom: 30px;
`;

export const ResumeWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const AsidePart = styled.div`
  width: 40%;
`;

export const MainPart = styled.div`
  width: 70%;
`;
