import styled from 'styled-components';
// these are the 'defaults' for the props, they come from
// a utils file, else you pass in props to override the settings
import { grid } from '../../utils/grid';

interface ContainerProps {
  cols?: string;
  rows?: string;
  colGap?: string;
  rowGap?: string;
  area?: string;
  justify?: string;
  align?: string;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props: ContainerProps) =>
    props.cols ? props.cols : grid.cols};
  grid-template-rows: ${(props: ContainerProps) =>
    props.rows ? props.rows : grid.rows};
  ${(props: ContainerProps) =>
    props.area && `grid-template-area: ${props.area};`}
  column-gap: ${(props: ContainerProps) =>
    props.colGap ? props.colGap : grid.colGap};
  row-gap: ${(props: ContainerProps) =>
    props.rowGap ? props.rowGap : grid.rowGap};
  justify-items: ${(props: ContainerProps) =>
    props.justify ? props.justify : grid.justify};
  align-items: ${(props: ContainerProps) =>
    props.align ? props.align : grid.align};
`;

// we do not get defaults for these from the grid
// utils files, it does not make sense tbh
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

const Item = styled.div`
  ${(props: ItemProps) =>
    props.colStart && `grid-column-start: ${props.colStart};`}
  ${(props: ItemProps) => props.colEnd && `grid-column-end: ${props.colEnd};`}
  ${(props: ItemProps) =>
    props.rowStart && `grid-row-start: ${props.rowStart};`}
  ${(props: ItemProps) => props.rowEnd && `grid-row-end: ${props.rowEnd};`}
  ${(props: ItemProps) => props.gridArea && `grid-area: ${props.gridArea};`}
  ${(props: ItemProps) => props.justify && `justify-self: ${props.justify};`}
  ${(props: ItemProps) => props.align && `align-self: ${props.align};`}
  /* Note this one is not in edge so maybe will drop it? 🤷‍♀️ */
  ${(props: ItemProps) => props.place && `place-self: ${props.place};`}
`;

export { Container, Item };
