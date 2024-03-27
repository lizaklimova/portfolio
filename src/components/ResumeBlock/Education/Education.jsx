import educationData from "data/education.json";
import {
  Degree,
  EducationItem,
  EducationList,
  Institution,
  Period,
} from "./Education.styled";

const Education = () => {
  return (
    <EducationList>
      {educationData.map(({ id, institution, period, degree }) => (
        <EducationItem key={id}>
          <Institution>{institution}</Institution>
          <Period>{period}</Period>
          <Degree>{degree}</Degree>
        </EducationItem>
      ))}
    </EducationList>
  );
};

export default Education;
