import { combineReducers } from 'redux'

// ===== import custom reducers ===== //
import book from './bookReducer'
import highlights from './highlightsReducer'
import modal from './modalReducer'
import settings from './settingsReducer'
import asideDisplay from './asideReducer'
import galleryDisplay from './galleryReducer'
import dictionary from './dictionaryReducer'

const rootReducer = combineReducers({
  book,
  highlights,
  modal,
  asideDisplay,
  settings,
  galleryDisplay,
  dictionary
});

export default rootReducer;
