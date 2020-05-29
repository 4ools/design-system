interface AllSitePagesQueryResult {
  edges: Array<{
    node: {
      path: string;
    };
  }>;
}

interface AllStoryPagesQueryResult {
  edges: Array<{
    node: {
      relativePath: string;
    };
  }>;
}

interface GitRootPathQueryResult {
  edges: Array<{
    node: {
      pluginOptions: {
        root: string;
      };
    };
  }>;
}

interface NavigationQueryResult {
  allSitePlugin: GitRootPathQueryResult;
  allFile: AllStoryPagesQueryResult;
  allSitePage: AllSitePagesQueryResult;
}

// ony two deep for now we do not need to worry then
interface PageNavigationItem {
  path: string;
  name: string;
  subPages?: Array<PageNavigationItem>;
}
type PageNavigation = Array<PageNavigationItem>;

export { PageNavigation, PageNavigationItem, NavigationQueryResult };
