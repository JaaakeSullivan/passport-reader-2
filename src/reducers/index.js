import { combineReducers } from 'redux';

// import our custom reducers
import book from './book';
import highlights from './highlights';
import modal from './modal';
import visibility from './visibility';

const rootReducer = combineReducers({  
  book,
  highlights,
  modal,
  visibility
});

export default rootReducer;
