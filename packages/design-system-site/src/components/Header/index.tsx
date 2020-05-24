import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { Typography, Grid } from '@4ools/design-system-components';

interface HeaderProps {
  siteTitle: string;
  setTheme: (theme: string) => void;
  theme: string;
}

const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.primary};
  padding: 20px;
  width: 100%;
`;

const HeaderText = styled(Typography.HeadingThree)`
  margin: 0;
`;

const Header: React.SFC<HeaderProps> = ({ siteTitle, setTheme, theme }) => (
  <StyledHeader>
    <Grid.Container cols="1fr 100px" rows="auto">
      <HeaderText>
        <Link to="/">{siteTitle}</Link>
      </HeaderText>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </Grid.Container>
  </StyledHeader>
);

export default Header;
