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

// ===== REFINE BOOK ARRAY WITH CUSTOM PROPERTIES ===== //
for (var i = 0; i < bookArray.length; i++) {
  if (i > bodyIndex && bookArray[i][0] !== '<')
  { // ===== add <span id="*"> to all text elements ===== //
    bookDisplay.push(`<span id="pr-${prId}">${bookArray[i]}</span>`);
    prId++;
  }
  else if (bookArray[i][1] === 'a' && bookArray[i][2] === ' ')
  { // ===== change href to id on all links ===== //
    let tempATag = bookArray[i].replace('href', 'id').replace('epub:type="noteref"', '');
    // === for aside popover links, add class to style === //
    if (tempATag.includes('popup')) {
      let splitATagArray = tempATag.split('');
      //console.log(splitATagArray);
      splitATagArray.splice(3, 0, 'class="aside-tag"');
      let newTempATag = splitATagArray.join('');
      bookDisplay.push(newTempATag);
    }
    else bookDisplay.push(tempATag);
  }
  else
  { // ===== DEFAULT - for standard tag elements ===== //
    bookDisplay.push(bookArray[i]);
  }
}


// ===== CONVERT HTML ARRAY TO STRING ===== //
let fullBookDisplayString = bookDisplay.join('');

// ===== BUILD ARRAY OF ASIDE ELEMENTS ===== //
let regExAsideBlock = /<aside (.*)<\/aside>/g;
let regExAsideElements = /(<aside .*?<\/aside>)/g;

// ===== CREATE STRING OF ASIDE ELEMENTS ===== //
let asideString = fullBookDisplayString.match(regExAsideBlock).join('');
// ===== SPLIT ASIDE ELEMENTS INTO ARRAY, REMOVE SPACES ===== //
let asideArray = asideString.split(regExAsideElements).filter(function(item) {
  return item !== "";
});

// ===== REMOVE ASIDE ELEMENTS FROM MAIN CONTENT ===== //
let bookDisplayString = fullBookDisplayString.replace(regExAsideBlock, '');

console.log(asideArray);

const defaultState = {
  book: {
    original: bookDisplayString,
    display: '',
    asides: asideArray
  },
  popover: {
    showPopover: false,
    popoverContent: 'default popover'
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
