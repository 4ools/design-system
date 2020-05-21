import './utils/font.css';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './components/GlobalStyles';
import { HeadingOne, HeadingThree, BodyCopy } from './components/Typography';

ReactDOM.render(
  <React.StrictMode>
    <HeadingOne>The quick brown fox jumped over the lazy dog</HeadingOne>
    <HeadingThree>This is a smaller heading</HeadingThree>
    <p>
      <BodyCopy>This is some copy text</BodyCopy>
    </p>
    <GlobalStyles />
  </React.StrictMode>,
  document.querySelector('#root')
);
