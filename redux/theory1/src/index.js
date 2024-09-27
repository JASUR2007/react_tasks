import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import App from './components/Apps';
import { Provider } from 'react-redux'

const store = createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

  ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
          <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

