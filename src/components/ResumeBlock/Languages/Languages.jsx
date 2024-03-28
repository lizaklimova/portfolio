import languagesData from "data/languages.json";
import {
  LanguageItem,
  LanguagesList,
  Title,
  Level,
  LisItemBlock,
} from "./Languages.styled";

const Languages = () => {
  return (
    <LanguagesList>
      {languagesData.map(({ id, language, level }) => (
        <LanguageItem key={id}>
          <LisItemBlock>
            <Title>{language}:</Title>
            <Level>{level}</Level>
          </LisItemBlock>
        </LanguageItem>
      ))}
    </LanguagesList>
  );
};

export default Languages;
