import styled from "styled-components";
import laptopPic from "assets/images/laptop.jpg";

export const MainPageSection = styled.section`
  display: flex;
  align-items: center;
  min-width: 100vw;
  height: calc(100vh - 70px);
  padding-bottom: 50px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
    url(${laptopPic}) no-repeat center/cover;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 90px);
  }
`;

export const TitlesBlock = styled.div`
  width: 100%;
  max-width: 900px;
  border-radius: 30px;
  border: 1px solid #fff;
  padding: 30px;
  margin-bottom: 30px;
  text-align: left;
  backdrop-filter: blur(15px);
  color: #fff;

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
    font-style: italic;
    margin-top: 20px;

    @media screen and (min-width: 768px) {
      font-size: 30px;
    }
  }
`;
