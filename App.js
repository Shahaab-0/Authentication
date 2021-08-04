import React from 'react';
import Navigation from './src/Navigation';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
