import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import store from './store';
import rootReducer from './reducers';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


console.log(store.getState());
store.dispatch({
  type: 'CLOSE_MODAL'
})

store.dispatch({
  type: 'TOGGLE_AUDIO'
})

store.dispatch({
  type: 'TOGGLE_HIGHLIGHTS'
})

store.dispatch({
  type: 'TOGGLE_NOTES'
})

store.dispatch({
  type: 'SAVE_HIGHLIGHT'
})

// store.dispatch({
//   type: 'OPEN_ASIDE'
// })

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
