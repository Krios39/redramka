import "./style.scss";

export enum ButtonType {
  Next = "next",
  Prev = "prev",
}

interface PaginatorButtonProps {
  onClick: () => void;
  type: ButtonType;
}

export const PaginatorButton = (props: PaginatorButtonProps) => {
  return (
    <div className={"paginator__button"} onClick={props.onClick}>
      <span
        className={`mdi mdi-chevron-${
          props.type === ButtonType.Next ? "right" : "left"
        }`}
      />
    </div>
  );
};
