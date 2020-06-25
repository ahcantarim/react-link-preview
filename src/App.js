import React from 'react';

import GlobalStyles from './styles/global';
import Home from './pages/Home';
import Header from './pages/Header';

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />
      <Home />
    </>
  );
}

export default App;
