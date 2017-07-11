/*
 * action types -- defined as strings to use in creators
 */

const GET_BOOK = 'GET_BOOK'
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const SAVE_HIGHLIGHT = 'SAVE_HIGHLIGHT'
const DELETE_HIGHLIGHT = 'DELETE_HIGHLIGHT'

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


// export function getBook(content) {
//   return {
//     type: GET_BOOK,
//     content
//   }
// }
//
//
// export function filterContent(item, status) {
//   return {
//     type: FILTER_CONTENT,
//     item,
//     status
//   }
// }
//
export function saveHighlight(
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








//
// // increment
// export function increment(index) {
//   return {
//     type: 'INCREMENT_LIKES',
//     index
//   }
// }
//
// // add comment
// export function addComment(postId, author, comment) {
//   return {
//     type: 'ADD_COMMENT',
//     postId,
//     author,
//     comment
//   }
// }
//
// // remove comment
//
// export function removeComment(postId, i) {
//   return {
//     type: 'REMOVE_COMMENT',
//     i,
//     postId
//   }
// }
