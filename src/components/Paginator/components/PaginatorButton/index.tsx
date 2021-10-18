import "./style.scss";

export enum ButtonType {
  Next = "next",
  Prev = "prev",
}

interface PaginatorButtonProps {
  onClick: () => void;
  type: ButtonType;
  disabled: boolean;
}

export const PaginatorButton = (props: PaginatorButtonProps) => {
  const onClick = () => {
    if (!props.disabled) props.onClick();
  };

  return (
    <div className={"paginator__button"} onClick={onClick}>
      <span
        className={`mdi mdi-chevron-${
          props.type === ButtonType.Next ? "right" : "left"
        }`}
      />
    </div>
  );
};
