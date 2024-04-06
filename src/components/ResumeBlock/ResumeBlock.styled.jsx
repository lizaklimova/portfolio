import styled from "styled-components";

export const ResumeItem = styled.div`
  margin-bottom: 15px;
`;

export const ResumeTitle = styled.h2`
  position: relative;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.4;
  color: var(--accent-color);
  margin-bottom: 17px;

  &::before {
    position: absolute;
    top: 50%;
    left: 40%;
    content: "";
    display: block;
    width: calc(100% - 130px);
    height: 1px;
    border-radius: 30px;
    background-color: var(--grey-color);

    @media screen and (min-width: 768px) {
      left: 20%;
    }

    @media screen and (min-width: 1440px) {
      left: 30%;
      width: calc(100% - 190px);
    }
  }

  ${({ $variant }) =>
    $variant === "skills" &&
    "&::before {left: 80px; width: calc(100% - 70px);}"}
`;
