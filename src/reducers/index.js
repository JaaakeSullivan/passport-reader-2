import { combineReducers } from 'redux';

// ===== import custom reducers ===== //
import book from './book';
import highlights from './highlights';
import modal from './modal';
import visibility from './visibility';
import aside from './aside';

const rootReducer = combineReducers({
  book,
  highlights,
  modal,
  aside,
  visibility
});

export default rootReducer;
