import { formatNavigationData } from '../useNavigation';
import { AllSitePagesQueryResult } from '../../../interfaces/navigation';

test('we do not include anything with a file extension', () => {
  const response: AllSitePagesQueryResult = {
    allSitePage: {
      edges: [
        {
          node: {
            path: '/something.html',
          },
        },
      ],
    },
  };
  const pages = formatNavigationData(response);
  expect(pages).toStrictEqual([]);
});

test('we include items that do not have a file extension', () => {
  const response: AllSitePagesQueryResult = {
    allSitePage: {
      edges: [
        {
          node: {
            path: '/something/',
          },
        },
      ],
    },
  };
  const pages = formatNavigationData(response);
  expect(pages).toStrictEqual([
    {
      path: 'something',
      name: 'something',
    },
  ]);
});

test('we should get a sub page if we have one', () => {
  const response: AllSitePagesQueryResult = {
    allSitePage: {
      edges: [
        {
          node: {
            path: '/something/new/',
          },
        },
      ],
    },
  };
  const pages = formatNavigationData(response);
  expect(pages).toStrictEqual([
    {
      path: '',
      name: 'something',
      subPages: [
        {
          path: 'something/new',
          name: 'new',
        },
      ],
    },
  ]);
});

test('if we have two pages under the same page they should be organized correctly', () => {
  const response: AllSitePagesQueryResult = {
    allSitePage: {
      edges: [
        {
          node: {
            path: '/something/new/',
          },
        },
        {
          node: {
            path: '/something/again/',
          },
        },
      ],
    },
  };
  const pages = formatNavigationData(response);
  expect(pages).toStrictEqual([
    {
      path: '',
      name: 'something',
      subPages: [
        {
          path: 'something/new',
          name: 'new',
        },
        {
          path: 'something/again',
          name: 'again',
        },
      ],
    },
  ]);
});

test('we should default the page to home if there is no path other than /', () => {
  const response: AllSitePagesQueryResult = {
    allSitePage: {
      edges: [
        {
          node: {
            path: '/',
          },
        },
      ],
    },
  };
  const pages = formatNavigationData(response);
  expect(pages).toStrictEqual([
    {
      path: '/',
      name: 'Home',
    },
  ]);
});
