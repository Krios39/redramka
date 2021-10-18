import "./style.scss";

interface PaginatorLinksProps {
  pageCount: number;
  selectedPageIndex: number;
  onPageCircleClick: (index: number) => void;
}

export const PaginatorLinks = (props: PaginatorLinksProps) => {
  return (
    <div className={"paginator__links"}>
      {new Array(props.pageCount).fill(0).map((_, index) => (
        <PaginatorLink
          key={index}
          index={index}
          isSelectedPage={index === props.selectedPageIndex}
          onClick={() => props.onPageCircleClick(index)}
        />
      ))}
    </div>
  );
};

interface PaginatorLinkProps {
  index: number;
  isSelectedPage: boolean;
  onClick: () => void;
}

const PaginatorLink = (props: PaginatorLinkProps) => {
  return (
    <div
      onClick={props.onClick}
      className={`paginator__link ${
        props.isSelectedPage ? "selected_page" : ""
      }`}
    />
  );
};
