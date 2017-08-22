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
    //display: 'hey there',
    displayArray: [],
    displayHighlights: [],
    asides: []
  },
  highlights: highlightsDefault
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
