import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './Routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#5D3F9A" barStyle="light-content" />
      <Routes />
    </>
  );
};

export default App;
