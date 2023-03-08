import React from 'react';
import {ScreenStack} from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/service/helpers';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ScreenStack />
      </Provider>
    </>
  );
};

export default App;
