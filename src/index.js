import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


console.log(store.getState());
store.dispatch({
  type: 'CLOSE_MODAL'
})

store.dispatch({
  type: 'SAVE_HIGHLIGHT'
})

store.dispatch({
  type: 'INITIALIZE_CONTENT'
})

store.dispatch({
  type: 'HIGHLIGHT_CONTENT'
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
