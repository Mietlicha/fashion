import React from 'react';
import GlobalTemplete from './utils/GlobalTemplete';
import TopBar from './components/molecules/TopBar';
import Drower from './components/atoms/Drower';

const App = () => {
  return (
    <GlobalTemplete>
      <TopBar />
      <Drower />
    </GlobalTemplete>
  );
};

export default App;
