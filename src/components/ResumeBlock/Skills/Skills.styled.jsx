import styled from "styled-components";

export const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 15px;
`;

export const SkillItem = styled.li`
  list-style-type: disc;
  color: var(--accent-color);
`;

export const SkillBlock = styled.div`
  display: flex;
  font-size: 14px;
  color: #fff;
`;

export const SkillCategory = styled.p`
  font-weight: 700;
  letter-spacing: 0.6px;
  white-space: nowrap;
`;

export const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
