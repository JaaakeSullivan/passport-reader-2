import { createStore } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

//import comments from './data/comments';
import { bookString } from './data/bookString';
import { highlightsString } from './data/highlightsString';

// create an object for the default data

let bookArray = bookString.split(/(<.*?>{1})/g).filter(function(item) {
  return item !== "";
});

function isBody(el) {
  return el === '<body>';
}

let bodyIndex = bookArray.findIndex(isBody);

let bookDisplay = [];
let prId = 0;

for (var i = 0; i < bookArray.length; i++) {
  if (i > bodyIndex && bookArray[i][0] !== '<') {
    bookDisplay.push(`<span id="pr-${prId}">${bookArray[i]}</span>`);
    prId++;
  } else {
    bookDisplay.push(bookArray[i]);
  };
}

console.log(bookDisplay);

let bookDisplayString = bookDisplay.join('');

const defaultState = {
  book: {
    original: bookDisplayString,
    display: ''
  },
  studentId: 'student12345',
  mainContent: "main content goes here",
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
