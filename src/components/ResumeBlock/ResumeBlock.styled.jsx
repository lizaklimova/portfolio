import styled from "styled-components";

export const ResumeItem = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const ResumeTitle = styled.h2`
  position: relative;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.4;
  color: var(--accent-color);
  margin-bottom: 17px;

  &::before {
    position: absolute;
    top: 50%;
    left: 100px;
    content: "";
    display: block;
    width: calc(100% - 130px);
    /* width: 70px; */
    height: 1px;
    border-radius: 30px;
    background-color: var(--grey-color);
  }
`;
