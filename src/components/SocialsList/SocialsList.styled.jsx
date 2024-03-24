import styled from "styled-components";

export const ContactsList = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

export const ContactLink = styled.a`
  svg {
    fill: ${({ $variant }) =>
      $variant === "header" ? "var(--accent-color)" : "#fff"};
    transition: opacity var(--eased-transition);
  }

  &:hover svg,
  &:focus svg {
    opacity: 0.7;
  }

  @media screen and (min-width: 1440px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
