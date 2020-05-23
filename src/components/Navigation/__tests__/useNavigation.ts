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
            path: '/something',
          },
        },
      ],
    },
  };
  const pages = formatNavigationData(response);
  expect(pages).toBe([
    {
      path: '/something',
      name: 'something',
    },
  ]);
});
