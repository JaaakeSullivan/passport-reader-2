/*
 * action types -- defined as strings to use in creators
 */

import fetch from 'isomorphic-fetch'
import { parseString } from 'xml2js'
import config from '../config'

// ===== book ===== //
const GET_BOOK = 'GET_BOOK'
const HIGHLIGHT_CONTENT = 'HIGHLIGHT_CONTENT'
const INITIALIZE_CONTENT = 'INITIALIZE_CONTENT'

// ===== asides ===== //
const OPEN_ASIDE = 'OPEN_ASIDE'
const CLOSE_ASIDE = 'CLOSE_ASIDE'

// ===== modal ===== //
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const ADD_HIGHLIGHT = 'ADD_HIGHLIGHT'
const DELETE_HIGHLIGHT = 'DELETE_HIGHLIGHT'
const OPEN_HIGHLIGHT = 'OPEN_HIGHLIGHT'
const UPDATE_COLOR = 'UPDATE_COLOR'
const UPDATE_NOTE = 'UPDATE_NOTE'

// ===== delete ===== //
const LOOKUP_WORD = 'LOOKUP_WORD'

// ===== dictionary ===== //
const REQUEST_DEFINITION = 'REQUEST_DEFINITION'
const RECEIVE_DEFINITION = 'RECEIVE_DEFINITION'
const FETCH_DEFINITION = 'FETCH_DEFINITION'
const FETCH_DEFINITION_FAIL = 'FETCH_DEFINITION_FAIL'
const FETCH_DEFINITION_SUCCESS = 'FETCH_DEFINITION_SUCCESS'
const NEXT_WORD = 'NEXT_WORD'
const PREVIOUS_WORD = 'PREVIOUS_WORD'
const NEXT_DEFINITION = 'NEXT_DEFINITION'
const PREVIOUS_DEFINITION = 'PREVIOUS_DEFINITION'
const SAVE_DEFINITION = 'SAVE_DEFINITION'

// ===== gallery ===== //
const OPEN_GALLERY = 'OPEN_GALLERY'
const CLOSE_GALLERY = 'CLOSE_GALLERY'
const NEXT_IMAGE = 'NEXT_IMAGE'
const PREVIOUS_IMAGE = 'PREVIOUS_IMAGE'

// ===== settings ===== //
const TOGGLE_AUDIO = 'TOGGLE_AUDIO'
const OPEN_AUDIO = 'OPEN_AUDIO'
const CLOSE_AUDIO = 'CLOSE_AUDIO'
const TOGGLE_HIGHLIGHTS = 'TOGGLE_HIGHLIGHTS'
const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'
const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE'
const CHANGE_VIEW = 'CHANGE_VIEW'


// ========================================== //
//                    BOOK                    //
// ========================================== //

// TODO: create GET_BOOK action

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


// ========================================== //
//                   ASIDES                   //
// ========================================== //


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

// ========================================== //
//                    MODAL                   //
// ========================================== //

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

// ===== TAKE / UPDATE A NOTE ===== //
export function updateNote(_id, note) {
  console.log(note)
  return {
    type: UPDATE_NOTE,
    _id,
    note
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

export function deleteHighlight(matchesToDelete) {
  return {
    type: DELETE_HIGHLIGHT,
    matchesToDelete
  }
}


// ========================================== //
//                 DICTIONARY                 //
// ========================================== //

export function lookupWord() {
  return {
    type: LOOKUP_WORD
  }
}

export function requestDefinition(word) {
  return {
    type: REQUEST_DEFINITION,
    word
  }
}

export function receiveDefinition(word, response) {
  return {
    type: RECEIVE_DEFINITION,
    word,
    response
  }
}

export function fetchDefinition(word) {
  return function (dispatch) {
    dispatch(requestDefinition(word)) 
    return fetch(`http://www.dictionaryapi.com/api/v1/references/sd4/xml/${word}?key=${config.mwStudent}`)
      .then(
        response => response.text(),
        error => console.log('An error with the dictionary occured.', error)      
      )
      .then(
        text => parseString(text, function (err, result) {
          dispatch(receiveDefinition(word, result.entry_list.entry))
        })
        // text => dispatch(receiveDefinition(word, parseString(text)))
      )
  }
}

export function fetchDefinitionFail(error) {
  return {
    type: FETCH_DEFINITION_FAIL,
    error
  }
}

export function fetchDefinitionSuccess(response) {
  return {
    type: FETCH_DEFINITION_SUCCESS,
    response
  }
}

export function previousWord() {
  return {
    type: PREVIOUS_WORD
  }
}

export function nextWord() {
  return {
    type: NEXT_WORD
  }
}

export function previousDefinition() {
  return {
    type: PREVIOUS_DEFINITION
  }
}

export function nextDefinition() {
  return {
    type: NEXT_DEFINITION
  }
}

export function saveDefinition(word, definition) {
  return {
    type: SAVE_DEFINITION,
    word,
    definition
  }
}

// export const addHighlight = (_id, startId, endId, startPos, endPos, betweenArray, color, selectedText, time, note ) => dispatch => {
//   dispatch({
//     type: ADD_HIGHLIGHT, _id, startId, endId, startPos, endPos, betweenArray, color, selectedText, time, note
//   })
//   return (Promise.resolve())
// };


// ========================================== //
//                   GALLARY                  //
// ========================================== //

export function openGallery(galleryIndex, imageIndex) {
  return {
    type: OPEN_GALLERY,
    galleryIndex,
    imageIndex
  }
}

export function closeGallery() {
  return {
    type: CLOSE_GALLERY
  }
}

export function nextImage() {
  return {
    type: NEXT_IMAGE
  }
}

export function previousImage() {
  return {
    type: PREVIOUS_IMAGE
  }
}

// ========================================== //
//                  SETTINGS                  //
// ========================================== //

export function toggleAudio() {
  return {
    type: TOGGLE_AUDIO
  }
}
export function openAudio() {
  return {
    type: OPEN_AUDIO
  }
}
export function closeAudio() {
  return {
    type: CLOSE_AUDIO
  }
}

export function toggleHighlights() {
  return {
    type: TOGGLE_HIGHLIGHTS
  }
}

export function toggleDarkMode() {
  return {
    type: TOGGLE_DARK_MODE
  }
}

export function changeFontSize(value) {
  return {
    type: CHANGE_FONT_SIZE,
    value
  }
}

export function changeView(view) {
  return {
    type: CHANGE_VIEW,
    view
  }
}

