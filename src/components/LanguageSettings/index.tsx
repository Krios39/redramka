import { Language, LanguageInfo } from "../../App";
import "./style.scss";

interface LanguageSettingsProps {
  languages: LanguageInfo[];
  onLanguageClick: (language: LanguageInfo) => void;
  selectLanguage: Language;
}

export const LanguageSettings = (props: LanguageSettingsProps) => {
  return (
    <div className={"language_settings"}>
      {props.languages.map((lang) => (
        <LangCircle
          key={lang.name}
          selected={lang.name === props.selectLanguage}
          onClick={() => props.onLanguageClick(lang)}
          languageInfo={lang}
        />
      ))}
    </div>
  );
};

interface LangCircleProps {
  languageInfo: LanguageInfo;
  onClick: () => void;
  selected: boolean;
}

const LangCircle = (props: LangCircleProps) => {
  return (
    <div
      className={`language_circle ${props.selected ? "selected_language" : ""}`}
      onClick={props.onClick}
    >
      {props.languageInfo.shortName}
    </div>
  );
};
