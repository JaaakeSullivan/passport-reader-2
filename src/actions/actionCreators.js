/*
 * action types -- defined as strings to use in creators
 */

const GET_BOOK = 'GET_BOOK'
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const SAVE_HIGHLIGHT = 'ADD_HIGHLIGHT'
const DELETE_HIGHLIGHT = 'DELETE_HIGHLIGHT'
const OPEN_ASIDE = 'OPEN_ASIDE'
const CLOSE_ASIDE = 'CLOSE_ASIDE'
const HIGHLIGHT_CONTENT = 'HIGHLIGHT_CONTENT'
/*
 * other constants
 */

const VISIBILITY_FILTERS = {
  SHOW_NOTES: 'SHOW_NOTES',
  SHOW_HIGHLIGHTS: 'SHOW_HIGHLIGHTS',
  SHOW_AUDIO: 'SHOW_AUDIO'
}

/*
 * action creators
 */

// Open modal and populate with content

export function openModal(
    selectedText,
    idAndPosition,
    betweenArray
  ){
  return {
    type: OPEN_MODAL,
    selectedText,
    idAndPosition,
    betweenArray
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function addHighlight(
  _id,
  userId,
  bookId,
  elId,
  startPos,
  endPos,
  color,
  content,
  note
) {
  return {
    type: SAVE_HIGHLIGHT,
    _id,
    userId,
    bookId,
    elId,
    startPos,
    endPos,
    color,
    content,
    note
  }
}

export function deleteHighlight(_id) {
  return {
    type: DELETE_HIGHLIGHT,
    _id
  }
}

export function openAside(id) {
  return {
    type: OPEN_ASIDE,
    id
  }

}

export function closeAside() {
  return {
    type: CLOSE_ASIDE
  }
}
