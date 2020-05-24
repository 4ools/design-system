import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '@4ools/design-system-components';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.primary};
  padding: 20px;
`;

const HeaderText = styled(Typography.HeadingThree)`
  margin: 0;
`;

const Header: React.SFC<{ siteTitle: string }> = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderText>
      <Link to="/">{siteTitle}</Link>
    </HeaderText>
  </StyledHeader>
);

export default Header;
