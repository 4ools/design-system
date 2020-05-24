interface ItemProps {
    colStart?: string;
    colEnd?: string;
    rowStart?: string;
    rowEnd?: string;
    gridArea?: string;
    justify?: string;
    align?: string;
    place?: string;
}
declare const Grid: {
    Container: import("styled-components").StyledComponent<"div", any, {}, never>;
    Item: import("styled-components").StyledComponent<"div", any, ItemProps, never>;
};
export default Grid;
