import { ReactElement, useState } from "react";
import "./style.scss";
import "./animation.scss";
import { ButtonType, PaginatorButton } from "./components/PaginatorButton";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { PaginatorLinks } from "./components/PaginatorLinks";

interface PaginatorProps {
  children: ReactElement[];
}

export const Paginator = (props: PaginatorProps) => {
  const [page, setPage] = useState<number>(0);
  const [prevPage, setPrevPage] = useState<number>(0);
  const [buttonsDisabled, setButtonsDisabled] = useState<boolean>(false);

  const countAllPages = props.children.length;

  const onNextButtonClick = () => {
    if (page === countAllPages - 1) {
      setPage(0);
    } else setPage((prev) => prev + 1);
  };

  const onPrevButtonClick = () => {
    if (page === 0) {
      setPage(countAllPages - 1);
    } else setPage((prev) => prev - 1);
  };

  const onAnimationEnter = () => {
    setButtonsDisabled(true);
  };

  const onAnimationEntered = () => {
    setPrevPage(page);
    setButtonsDisabled(false);
  };

  return (
    <div className="paginator">
      <SwitchTransition mode={"in-out"}>
        <CSSTransition
          key={page}
          classNames={
            prevPage < page || (prevPage === countAllPages - 1 && page === 0)
              ? "next-transition"
              : "prev-transition"
          }
          timeout={500}
          onEntered={onAnimationEntered}
          onEnter={onAnimationEnter}
        >
          <div className={"paginator__content"}>{props.children[page]}</div>
        </CSSTransition>
      </SwitchTransition>

      <div className="paginator__buttons_block">
        <PaginatorButton
          disabled={buttonsDisabled}
          type={ButtonType.Prev}
          onClick={onPrevButtonClick}
        />
        <PaginatorButton
          disabled={buttonsDisabled}
          type={ButtonType.Next}
          onClick={onNextButtonClick}
        />
      </div>
      <PaginatorLinks
        pageCount={countAllPages}
        selectedPageIndex={page}
        onPageCircleClick={(index) => setPage(index)}
      />
    </div>
  );
};
