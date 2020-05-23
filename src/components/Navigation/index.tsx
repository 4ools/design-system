import * as React from 'react';
import { useNavigation } from './useNavigation';
import type { PageNavigationItem } from '../../interfaces/navigation';

type NavItemProps = {
  page: PageNavigationItem;
  key: number;
};

const NavItem: React.SFC<NavItemProps> = ({ page, key }) => (
  <li key={key}>{page.name}</li>
);

// just the links for the site (all the pages with the components on)
const Navigation = () => {
  const pages = useNavigation();
  return (
    <>
      {pages && (
        <nav>
          <ul>
            {pages.map((page, index) => {
              return page.subPages ? (
                <>
                  {NavItem({ page, key: index })}
                  <ul>
                    {page.subPages.map((subPage, subIndex) =>
                      NavItem({ page: subPage, key: subIndex })
                    )}
                  </ul>
                </>
              ) : (
                NavItem({ page, key: index })
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
