import React, { useState } from "react";
import { Slider } from "./components/Slider/inedx";
import { LanguageSettings } from "./components/LanguageSettings";
import "@mdi/font/css/materialdesignicons.css";
export enum Language {
  Russian = "Русский",
  English = "Английский",
}

export interface Slide {
  img: string;
  text: Text;
}

interface Text {
  [Language.Russian]: string;
  [Language.English]: string;
}

export interface LanguageInfo {
  name: string;
  shortName: string;
}

const content: Slide[] = [
  {
    img: "http://fullhdwallpapers.ru/image/cats/18843/koshka-s-zelenymi-glazami.jpg",
    text: {
      [Language.English]:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis erat nec magna ultricies maximus.",
      [Language.Russian]:
        "Съешь [же] ещё этих мягких французских булок да выпей чаю",
    },
  },
  {
    img: "http://fullhdwallpapers.ru/image/cats/2696/krasivaya-koshka.jpg",
    text: {
      [Language.English]:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis erat nec magna ultricies maximus.",
      [Language.Russian]:
        "Съешь [же] ещё этих мягких французских булок да выпей чаю",
    },
  },
  {
    img: "http://fullhdwallpapers.ru/image/cats/10945/krasivaya-koshka-anfas.jpg",
    text: {
      [Language.English]:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis erat nec magna ultricies maximus.",
      [Language.Russian]:
        "Съешь [же] ещё этих мягких французских булок да выпей чаю",
    },
  },
];

const LanguageShortName = {
  [Language.Russian]: "RU",
  [Language.English]: "EN",
};

const languages: LanguageInfo[] = [
  {
    name: Language.Russian,
    shortName: LanguageShortName[Language.Russian],
  },
  {
    name: Language.English,
    shortName: LanguageShortName[Language.English],
  },
];

function App() {
  const [selectLanguage, setSelectLanguage] = useState<Language>(
    Language.English
  );

  const onLanguageClick = (lang: LanguageInfo) => {
    setSelectLanguage(lang.name);
  };

  return (
    <div className="app">
      <Slider slides={content} selectedLanguage={selectLanguage} />
      <LanguageSettings
        selectLanguage={selectLanguage}
        languages={languages}
        onLanguageClick={onLanguageClick}
      />
    </div>
  );
}

export default App;
