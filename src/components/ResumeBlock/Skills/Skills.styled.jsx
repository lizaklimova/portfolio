import styled from "styled-components";

export const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 15px;
`;

export const SkillItem = styled.li`
  list-style-type: disc;
  color: var(--accent-color);
`;

export const SkillBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #fff;
`;

export const SkillCategory = styled.p`
  font-weight: 700;
  letter-spacing: 0.6px;
`;

export const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
