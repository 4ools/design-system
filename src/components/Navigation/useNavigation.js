import { useStaticQuery, graphql } from 'gatsby';

const useNavigation = () => {
  const data = useStaticQuery(graphql`
    query allPages {
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `);

  // [
  //   {name: string, path: string, pages?: []}
  // ]
  const nav = []

  const paths = data?.allSitePage?.edges?.map(item => {
    const path = item?.node?.path
    if (path === '/') {
      return '/'
    }
    // we don't care about anything with a file extension
    if (path.match(/\.[^/.]+$/)) {
      debugger;
      return;
    }
    // we will only support two levels of navigation it does not make
    // sense to get to mental in here supporting too much
    const parts = path.split('/');
    // remove the slashes at both ends
    parts.pop();
    parts.shift();

    return parts;
  });

  // as we have the paths 'clean' now lets build
  // our navigation object
  paths.forEach(path => {
    const parts = path.split('/')
    if (parts[1]) {
      // if the directory does not exist yet
      if (!nav[parts[0]]) {
        nav[parts[0]] =
      }
      nav[parts[0]].push({
        path,
        name:  parts[1]
      })
    } else {
      nav[parts[0]] = {

      }
    }
    nav.push({
      name: parts[0],
      path,
      pages: []
    })
  });

  return pages;
};

export default useNavigation;
