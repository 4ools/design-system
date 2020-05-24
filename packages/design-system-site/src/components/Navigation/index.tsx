import * as React from 'react';
import { Link } from 'gatsby';
import { useNavigation } from './useNavigation';
import type { PageNavigationItem } from '../../interfaces/navigation';

type NavItemProps = {
  page: PageNavigationItem;
};

const NavItem: React.SFC<NavItemProps> = ({ page }) => <li>{page.name}</li>;

// just the links for the site (all the pages with the components on)
const Navigation: React.SFC = () => {
  const pages = useNavigation();
  return (
    <>
      {pages && (
        <nav>
          <ul>
            {pages.map((page, index) => {
              return page.subPages ? (
                <div key={index}>
                  {NavItem({ page })}
                  <ul>
                    {page.subPages.map((subPage, subIndex) => (
                      <Link to={subPage.path} key={subIndex}>
                        {NavItem({ page: subPage })}
                      </Link>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link to={page.path} key={index}>
                  {NavItem({ page })}
                </Link>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
