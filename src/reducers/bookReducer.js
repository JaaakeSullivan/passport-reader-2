// reducer takes in two things
// 1) what happened and 2) a copy of the current state
// then return copy of updated state
// import { bookString } from '../data/bookString';

// we set state to an empty array to start off
import { buildDisplayContent } from '../helpers/displayHelpers';
import { getIndexOfId, splitElement, removeBlanksFromArray, addHighlights } from '../helpers/highlightsHelpers';
import store from '../store';

function book(state=[], action) {
  let originalContent = state.original; // get the original content from state
  let displayContent = "loading";
  let displayArray = [];
  let asideArray = [];
  let imageArray = [];

  if (originalContent) { // check if original conent is loaded
    // buildDisplayContent is in ../helpers/displayHelpers.js & returns object
    let displayContent = buildDisplayContent(originalContent); //returns { bookDisplayString, bookDisplay, asideArray }
    //displayContent = bookDisplayString; // no longer needed
    displayArray = displayContent.bookDisplay;
    asideArray = displayContent.asideArray;
    imageArray = displayContent.imageArray;
  }

  switch (action.type) {
    case 'INITIALIZE_CONTENT':
      return {
        ...state,
        displayArray: displayArray,
        asides: asideArray,
        images: imageArray
      }
    case 'HIGHLIGHT_CONTENT':
      let highlightsArray = store.getState().highlights;
      // let highlightsArray = state.highlights;
      // BUILD THE DISPLAY FOR SHOWING HIGHLIGHTS //
      let displayHighlights = addHighlights(displayArray, highlightsArray);
      return {
        ...state,
        displayHighlights: displayHighlights
      };
    }
  return state;
}

export default book;
