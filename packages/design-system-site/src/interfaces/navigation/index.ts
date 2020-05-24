interface AllSitePagesQueryResult {
  allSitePage: {
    edges: Array<{
      node: {
        path: string;
      };
    }>;
  };
}

// ony two deep for now we do not need to worry then
interface PageNavigationItem {
  path: string;
  name: string;
  subPages?: Array<PageNavigationItem>;
}
type PageNavigation = Array<PageNavigationItem>;

export { PageNavigation, PageNavigationItem, AllSitePagesQueryResult };
