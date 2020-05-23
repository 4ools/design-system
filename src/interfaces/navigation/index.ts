interface AllSitePagesQueryResult {
  allSitePage: {
    edges: [
      {
        node: {
          path: string;
        };
      }
    ];
  };
}

// ony two deep for now we do not need to worry then
interface PageNavigationItem {
  path: string;
  name: string;
  subPages?: PageNavigationItem[];
}
type PageNavigation = PageNavigationItem[];

export { PageNavigation, PageNavigationItem, AllSitePagesQueryResult };
