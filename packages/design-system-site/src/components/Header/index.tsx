import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '@4ools/design-system-components';

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
    <HeaderText>
      <Link to="/">{siteTitle}</Link>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </HeaderText>
  </StyledHeader>
);

export default Header;
