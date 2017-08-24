import { combineReducers } from 'redux'

// ===== import custom reducers ===== //
import book from './bookReducer'
import highlights from './highlightsReducer'
import modal from './modalReducer'
import visibility from './visibilityReducer'
import asideDisplay from './asideReducer'
import galleryDisplay from './galleryReducer'

const rootReducer = combineReducers({
  book,
  highlights,
  modal,
  asideDisplay,
  visibility,
  galleryDisplay
});

export default rootReducer;
