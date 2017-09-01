import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';


//import comments from './data/comments';
import { bookString } from './data/bookString';
import { highlightsDefault } from './data/highlightsDefault';

//let asideArray = [];


const defaultState = {

  book: {
    original: bookString,
    displayArray: [],
    displayHighlights: [],
    asides: [],
    images: [],
    audio: []
  },
  dictionary: {
    word: '',
    isFetching: false,
    error: '',
    definitionIndex: 0,
    wordIndex: 0,
    response: {},
  },
  galleryDisplay: {
    showGallery: false,
    galleryIndex: 0,
    imageIndex: 0
  },
  highlights: highlightsDefault,
  settings: {
    showHighlights: true,
    showAudio: true,
    fontSize: 1,
    darkMode: false,
    view: 1
  }
};

//const store = createStore(rootReducer, defaultState);
const loggerMiddleware = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
   rootReducer, defaultState, composeEnhancers(
     applyMiddleware(
       thunkMiddleware, // lets us dispatch() functions
       loggerMiddleware // neat middleware that logs actions
     )
   )
  );

export default store;
