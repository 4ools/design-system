import * as React from 'react';
import { Link } from 'gatsby';
import { useNavigation } from './useNavigation';
import type { PageNavigationItem } from '../../interfaces/navigation';
import styled from 'styled-components';
import { CustomThemeProps } from '@4ools/design-system-components';

type NavItemProps = {
  page: PageNavigationItem;
  clickable?: boolean;
  child?: boolean;
};

interface ListItemProps extends CustomThemeProps {
  clickable?: boolean;
  child?: boolean;
}

const NavItem: React.SFC<NavItemProps> = ({ page, clickable, child }) => (
  <ListItem clickable={clickable} child={child}>
    {page.name}
  </ListItem>
);

const List = styled.ul`
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: ${(props: ListItemProps) =>
    props.child ? '10px 10px 10px 30px' : '10px'};
  width: 100%;
  &:hover {
    ${(props: ListItemProps) =>
      props.clickable && `background-color: ${props.theme.colors.hoverColor};`}
  }
`;

// just the links for the site (all the pages with the components on)
const Navigation: React.SFC = () => {
  const pages = useNavigation();
  return (
    <>
      {pages && (
        <nav>
          <List>
            {pages.map((page, index) => {
              return page.subPages ? (
                <div key={index}>
                  {NavItem({ page })}
                  <List>
                    {page.subPages.map((subPage, subIndex) => (
                      <Link to={subPage.path} key={subIndex}>
                        {NavItem({
                          page: subPage,
                          clickable: true,
                          child: true,
                        })}
                      </Link>
                    ))}
                  </List>
                </div>
              ) : (
                <Link to={page.path} key={index}>
                  {NavItem({ page, clickable: true })}
                </Link>
              );
            })}
          </List>
        </nav>
      )}
    </>
  );
};

export default Navigation;
