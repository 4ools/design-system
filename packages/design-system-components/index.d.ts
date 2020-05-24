declare module "themes/interfaces" {
    import { ThemeProps } from 'styled-components';
    interface ThemeColors {
        primary: string;
        secondary: string;
        tertiary: string;
        info: string;
        warning: string;
        error: string;
    }
    interface Theme {
        backgroundColor: string;
        textColor: string;
        borderColor: string;
        grid: GridConfig;
        colors: ThemeColors;
        textScale: TextScale;
        primaryFont: string;
    }
    interface Themes {
        light: Theme;
        dark: Theme;
    }
    interface TextScale {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        copy: string;
        small: string;
        smaller: string;
        smallest: string;
    }
    interface GridConfig {
        cols: string;
        rows: string;
        colGap: string;
        rowGap: string;
        justify: string;
        align: string;
    }
    type CustomThemeProps = ThemeProps<Theme>;
    export { GridConfig, Theme, ThemeColors, TextScale, Themes, CustomThemeProps };
}
declare module "themes/grid" {
    import { GridConfig } from "themes/interfaces";
    const grid: GridConfig;
    export default grid;
}
declare module "themes/colors" {
    const colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        warning: string;
        error: string;
        info: string;
        blue: string;
        orange: string;
        red: string;
    };
    export default colors;
}
declare module "themes/text-scale" {
    import { TextScale } from "themes/interfaces";
    const textScale: TextScale;
    export default textScale;
}
declare module "themes/typography" {
    const primaryFont = "\"Overpass Mono\", monospace;";
    export default primaryFont;
}
declare module "themes/index" {
    import { Themes } from "themes/interfaces";
    const themes: Themes;
    export default themes;
}
declare module "components/Grid/index" {
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
    const Grid: {
        Container: import("styled-components").StyledComponent<"div", any, {}, never>;
        Item: import("styled-components").StyledComponent<"div", any, ItemProps, never>;
    };
    export default Grid;
}
declare module "components/Typography/index" {
    const Typography: {
        HeadingOne: import("styled-components").StyledComponent<"h1", any, {}, never>;
        HeadingTwo: import("styled-components").StyledComponent<"h2", any, {}, never>;
        HeadingThree: import("styled-components").StyledComponent<"h3", any, {}, never>;
        HeadingFour: import("styled-components").StyledComponent<"h4", any, {}, never>;
        HeadingFive: import("styled-components").StyledComponent<"h5", any, {}, never>;
        BodyCopy: import("styled-components").StyledComponent<"div", any, {}, never>;
    };
    export default Typography;
}
declare module "index" {
    import themes from "themes/index";
    import { CustomThemeProps } from "themes/interfaces";
    import Grid from "components/Grid/index";
    import Typography from "components/Typography/index";
    export { Typography, Grid, themes, CustomThemeProps };
}
