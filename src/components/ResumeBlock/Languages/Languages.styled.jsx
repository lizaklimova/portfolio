import styled from "styled-components";

export const LanguagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #fff;
  padding-left: 15px;
`;

export const LanguageItem = styled.li`
  list-style-type: disc;
  color: var(--accent-color);
`;

export const LisItemBlock = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3px;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #fff;
`;

export const Level = styled.p`
  font-size: 14px;
  color: #fff;
`;
