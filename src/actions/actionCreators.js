import store from '../store'

/*
 * action types -- defined as strings to use in creators
 */

const GET_BOOK = 'GET_BOOK'
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const ADD_HIGHLIGHT = 'ADD_HIGHLIGHT'
const DELETE_HIGHLIGHT = 'DELETE_HIGHLIGHT'
const OPEN_ASIDE = 'OPEN_ASIDE'
const CLOSE_ASIDE = 'CLOSE_ASIDE'
const HIGHLIGHT_CONTENT = 'HIGHLIGHT_CONTENT'
const INITIALIZE_CONTENT = 'INITIALIZE_CONTENT'
const OPEN_HIGHLIGHT = 'OPEN_HIGHLIGHT'
const UPDATE_COLOR = 'UPDATE_COLOR'
const UPDATE_NOTE = 'UPDATE_NOTE'

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

export function initializeContent(
  content
) {
  return {
    type: INITIALIZE_CONTENT,
    content
  }
}

export function highlightContent() {
  return {
    type: HIGHLIGHT_CONTENT
  }
}

export function openModal(
    selectedText,
    idAndPosition,
    betweenArray,
    highlightSelected
  ){
  return {
    type: OPEN_MODAL,
    selectedText,
    idAndPosition,
    betweenArray,
    highlightSelected
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function openHighlight(highlightClicked) {
  return {
    type: OPEN_HIGHLIGHT,
    highlightClicked
  }
}

// ===== CREATE A NEW HIGHLIGHT ===== //
export const addHighlight = (_id, startId, endId, startPos, endPos, betweenArray, color, selectedText, time, note ) => dispatch => {
  dispatch({
    type: ADD_HIGHLIGHT, _id, startId, endId, startPos, endPos, betweenArray, color, selectedText, time, note
  })
  return (Promise.resolve())
};

// ===== UPDATE AN EXISTING HIGHLIGHT COLOR ===== //
export const updateColor = (_id, color) => dispatch => {
  dispatch({
    type: UPDATE_COLOR, _id, color
  })
  return (Promise.resolve())
}



// export function addHighlight(
//   _id,
//   startId,
//   endId,
//   startPos,
//   endPos,
//   betweenArray,
//   color,
//   selectedText,
//   time,
//   note
// ) {
//   return {
//     type: ADD_HIGHLIGHT,
//     _id,
//     startId,
//     endId,
//     startPos,
//     endPos,
//     betweenArray,
//     color,
//     selectedText,
//     time,
//     note
//   }
// }

export function deleteHighlight(matchesToDelete) {
  return {
    type: DELETE_HIGHLIGHT,
    matchesToDelete
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
