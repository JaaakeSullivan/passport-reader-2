// reducer takes in two things
// 1) what happened and 2) a copy of the current state
// then return copy of updated state
// import { bookString } from '../data/bookString';

// we set state to an empty array to start off
import { buildDisplayContent } from '../helpers/displayHelpers';

function book(state=[], action) {
  let originalContent = state.original;
  // console.log(originalContent)
  // console.log("from book reducer: ", original)
  let displayContent = "loading";
  let displayArray = [];
  let asideArray = [];

  if (originalContent) { // check if original conent is loaded
    let contentObject = buildDisplayContent(originalContent)
    displayArray = contentObject.displayArray;
    displayContent = contentObject.bookDisplayString;
    
    if (displayArray) {
      console.log('displayArray', displayArray)
    }

    // START HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!
    // BUILD ARRAY THAT CAN BE UPDATED EASILY!!!
    // displayContent = displayArray.join('');

    asideArray = contentObject.asideArray;
  }

  switch (action.type) {
    case 'INITIALIZE_CONTENT':
      return {
        ...state,
        displayArray: displayArray,
        display: displayContent,
        asides: asideArray
      }
    case 'HIGHLIGHT_CONTENT':
    // ===== ADD HIGHLIGHT <span class=pr-color> </span> TO ELEMENTS IN ARRAY ===== //
      let highlightedContent = state.display;

      // ==== FOR EACH ITEM IN HIGHLIGHTS ARRAY
      // === STARTING AND ENDING TAGS === //
      // find index of startId, return value (string)
      // split into array on element tag, special characters, then character
      // REGEX HERE: /<.*?>/g || /&.*?;/g || ''
      // === INSERT END ID TAG === //
      // (if startId === endId) ? splice </span> at endPos + 1
      // (else) add </span> at end array[-2] to put it inside the last closing tag
      // === INSERT START ID TAG === //
      // splice <span class=pr-color> into array at startPos + 1 (to skip the opening tag)
      // === JOIN ARRAY AND REPLACE IN MAIN ARRAY
      // join array into one string
      // splice string back into bookDisplay at index of startId

      // === END ID === //


      // if startId == endId, add </span> to endId at endPos + 1, else add </span> to end
        //

      // === if startId !== endId === //
        // add </span> at end of startId
        // add <span class=pr-color> to start of endId

      // === if betweenIds === //
        // add class=pr-color to each

      return {
        ...state,
        display: highlightedContent




      };
    }
  return state;
}

export default book;
