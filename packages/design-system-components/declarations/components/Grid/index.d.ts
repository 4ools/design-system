import { StyledComponent } from 'styled-components';
import { CustomThemeProps } from '../../themes/interfaces';
interface ContainerProps extends CustomThemeProps {
    cols?: string;
    rows?: string;
    colGap?: string;
    rowGap?: string;
    area?: string;
    justify?: string;
    align?: string;
}
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
    Container: StyledComponent<"div", any, ContainerProps, never>;
    Item: StyledComponent<"div", any, ItemProps, never>;
};
export default Grid;
