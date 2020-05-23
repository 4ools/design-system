import React from 'react';
import useNavigation from './useNavigation';

// just the links for the site (all the pages with the components on)
const Navigation = () => {
  const pages = useNavigation();
  return (
    <>
      {pages && (
        <nav>
          <ul>
            {pages.map((page, index) => {
              return <li key={index}>{page}</li>;
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
