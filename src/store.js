import { createStore } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

//import comments from './data/comments';
import { bookString } from './data/bookString';
import { highlightsDefault } from './data/highlightsDefault';

let asideArray = [];

const defaultState = {
  book: {
    original: bookString,
    display: 'hey there',
    displayArray: [],
    asides: asideArray
  },
  popover: {
    showPopover: false,
    popoverContent: 'default popover'
  },
  studentId: 'student12345',
  mainContent: "main content goes here",
  highlights: highlightsDefault
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
