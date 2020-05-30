import { useStaticQuery, graphql } from 'gatsby';
import type {
  AllSitePagesQueryResult,
  PageNavigation,
  PageNavigationItem,
} from '../../interfaces/navigation';

const formatPageNavigationData = (
  queryResult: AllSitePagesQueryResult
): PageNavigation => {
  const nav: PageNavigation = [];

  queryResult?.allSitePage?.edges
    // don't include anything with a file extension
    .filter(item => !item?.node?.path.match(/\.[^/.]+$/))
    // get the paths that we care about
    .map(item => {
      const path = item?.node?.path;
      if (path === '/') {
        return '/';
      }

      // we will only support two levels of navigation it does not make
      // sense to get to mental in here supporting too much
      const parts = path.split('/');
      // remove the slashes at both ends
      parts.pop();
      parts.shift();

      return parts.join('/');
    })
    .forEach(path => {
      const parts = path.split('/');
      const firstLevelName = parts[0];
      const secondLevelName = parts[1];

      const thisPage: PageNavigationItem = {
        name: secondLevelName || firstLevelName || 'Home',
        path,
      };
      // if we have a two level page
      if (secondLevelName) {
        // if the parent does not exist yet
        if (!nav.some(item => item.name === firstLevelName)) {
          nav.push({
            name: firstLevelName,
            // parent pages not have a path (they are just accordion items)
            path: '',
            // add this page as the first in the array of sub pages
            subPages: [thisPage],
          });
        } else {
          // the parent page exists
          nav.forEach(page => {
            // find the parent page entry and add this sub page as one of the children
            if (page.name === firstLevelName) {
              page.subPages.push(thisPage);
            }
          });
        }
      } else {
        // not a sub page, just add it to the nav
        nav.push(thisPage);
      }
    });

  return nav;
};

const useNavigation = (): PageNavigation => {
  const navigationData: AllSitePagesQueryResult = useStaticQuery(graphql`
    query Pages {
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `);

  return formatPageNavigationData(navigationData);
};

export { useNavigation, formatPageNavigationData };
