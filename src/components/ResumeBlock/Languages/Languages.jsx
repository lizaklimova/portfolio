import languagesData from "data/languages.json";
import { LanguageItem, LanguagesList, Title, Level } from "./Languages.styled";

const Languages = () => {
  return (
    <LanguagesList>
      {languagesData.map(({ id, language, level }) => (
        <LanguageItem key={id}>
          <Title>{language}:</Title>
          <Level>{level}</Level>
        </LanguageItem>
      ))}
    </LanguagesList>
  );
};

export default Languages;
