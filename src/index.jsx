import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './components/GlobalStyles';

const App = () => <div>Hello</div>;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.querySelector('#root')
);
