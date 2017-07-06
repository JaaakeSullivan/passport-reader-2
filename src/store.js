import { createStore } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

//import comments from './data/comments';
import { bookString } from './data/bookString';
import { highlightsString } from './data/highlightsString';

// create an object for the default data
const defaultState = {
  book: {
    original: bookString,
    display: ''
  },
  studentId: 'student12345',
  mainContent: "main content goes here",
  modalContent: "modal content goes here",
  highlights: highlightsString
};

//const store = createStore(rootReducer, defaultState);

const store = createStore(
   rootReducer, defaultState,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


// if(module.hot) {
//   module.hot.accept('./reducers/',() => {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;
