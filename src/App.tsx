import React from 'react';
import GlobalTemplete from './utils/GlobalTemplete';
import TopBar from './components/molecules/TopBar';
import Navigation from './components/organisms/Navigation';
import Content from './components/organisms/Content';

const App = () => {
  return (
    <GlobalTemplete>
      <TopBar />
      <Navigation />
      <Content />
    </GlobalTemplete>
  );
};

export default App;
