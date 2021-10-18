import { Language, Slide } from "../../App";
import { Paginator } from "../Paginator";
import "./style.scss";

interface SliderProps {
  slides: Slide[];
  selectedLanguage: Language;
}

export const Slider = (props: SliderProps) => {
  return (
    <div className={"slider"}>
      <Paginator>
        {props.slides.map((slide, index) => (
          <div key={index} className={"slide"}>
            <img className={"slide__image"} src={slide.img} alt={""} />
            <div className={"slide__text_block"}>
              <span className={"slide__text"}>
                {slide.text[props.selectedLanguage]}
              </span>
            </div>
          </div>
        ))}
      </Paginator>
    </div>
  );
};
