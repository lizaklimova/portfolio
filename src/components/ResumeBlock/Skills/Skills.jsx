import skillsData from "data/skills.json";
import {
  SkillsList,
  SkillItem,
  SkillBlock,
  SkillCategory,
  ItemsList,
} from "./Skills.styled";

const Skills = () => {
  return (
    <SkillsList>
      {skillsData.map(({ id, category, items }) => (
        <SkillItem key={id}>
          <SkillBlock>
            <SkillCategory>{category}:&nbsp;&nbsp;&nbsp; </SkillCategory>
            <ItemsList>
              {items.map((item, index) => (
                <li key={index}>
                  <p>{item},&nbsp; </p>
                </li>
              ))}
            </ItemsList>
          </SkillBlock>
        </SkillItem>
      ))}
    </SkillsList>
  );
};

export default Skills;
