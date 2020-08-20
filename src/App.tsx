import React from 'react';
import GlobalTemplete from './utils/GlobalTemplete';
import TopBar from './components/molecules/TopBar';
// import Drower from './components/atoms/Drower';
import Navigation from './components/organisms/Navigation';

const App = () => {
  return (
    <GlobalTemplete>
      <TopBar />
      <Navigation />
    </GlobalTemplete>
  );
};

export default App;
