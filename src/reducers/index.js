import { combineReducers } from 'redux';

// ===== import custom reducers ===== //
import book from './bookReducer';
import highlights from './highlightsReducer';
import modal from './modalReducer';
import visibility from './visibilityReducer';
import aside from './asideReducer';

const rootReducer = combineReducers({
  book,
  highlights,
  modal,
  aside,
  visibility
});

export default rootReducer;
