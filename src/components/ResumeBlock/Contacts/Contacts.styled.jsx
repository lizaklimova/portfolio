import styled from "styled-components";

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;

export const ContactItem = styled.li`
  list-style-type: disc;
  color: var(--accent-color);

  a {
    font-size: 16px;
    color: #fff;
  }
`;
