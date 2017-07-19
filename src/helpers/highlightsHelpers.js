
// find the index of the id item in the array
export function getIndexOfId(array, id) {
  for (var j=0; j < array.length; j++) {
       if (array[j].match(id)) return j;
   }
   return -1;
}

export function splitElement(array, index) {
  //splits element into an array of 3 items [<tag>, inner content, </tag>]
  let splitElement = array[index].split(/(<.*?>)/g).removeBlanks();
  return splitElement;
}


// ============================================================================ //
// ***** ADD HIGHLIGHT <span class=pr-color> </span> TO ELEMENTS IN ARRAY ***** //
// ============================================================================ //

export function addHighlights (displayArray, highlightsArray) {

  let displayHighlights = [...displayArray];

  // ==== FOR EACH ITEM IN HIGHLIGHTS ARRAY === //
  for (let i = 0; i < highlightsArray.length; i ++) {
    let { startId, endId, startPos, endPos, betweenArray, color } = highlightsArray[i];
    let preserveSpecialChar = /(&.*?;|.)/g;

    // declare start of highlight variables
    let startIndex = getIndexOfId(displayHighlights, startId);
    let startSplitElement = splitElement(displayHighlights, startIndex);
    let startInnerArray = startSplitElement[1].split(preserveSpecialChar).removeBlanks();

    // declare the end of highlight variables
    let endIndex = getIndexOfId(displayHighlights, endId);
    let endSplitElement = splitElement(displayHighlights, endIndex);
    let endInnerArray = endSplitElement[1].split(preserveSpecialChar).removeBlanks();

    let spanOpen =  `<span class = "highlighted ${ color }">`
    let spanClose = `</span>`

    // holding variables for final insert
    let startInnerString, endInnerString;

    // insert closing span tag -- this ALWAYS happens
    endInnerArray.splice(endPos, 0, spanClose);

    // insert opening span tag & splice into displayHighlights
    if (startIndex === endIndex) { // happens when one id
      endInnerArray.splice(startPos, 0, spanOpen);
      let endInnerString = endInnerArray.join('');
      displayHighlights.splice(endIndex, 1, endInnerString);
    } else { // happens when highlighting across ids
      // add opening tag to start of endInnerArray
      endInnerArray.splice(0, 0, spanOpen);
      // add closing tag to end of startInnerArray
      startInnerArray.splice(-1, 0, spanClose);
      // add opening tag to start of startInnerArray
      startInnerArray.splice(startPos, 0, spanOpen);
      // join *InnerArrays into strings
      startInnerString = startInnerArray.join('');
      endInnerString = endInnerArray.join('');
      // splice finals back into displayHighlights array
      displayHighlights.splice(endIndex, 1, endInnerString);
      displayHighlights.splice(startIndex, 1, startInnerString);
    }

    // insert opening and closing spans on all elements in betweeen startId & endId
    for (var j = 0; j < betweenArray.length; j++) {
      let betweenItemIndex = getIndexOfId(displayHighlights, betweenArray[j]);
      let betweenItemArray = splitElement(displayHighlights, betweenItemIndex);
      betweenItemArray.splice(1, 0, spanOpen);
      betweenItemArray.splice(-1, 0, spanClose);
      let betweenItemString = betweenItemArray.join('');
      console.log('bt',betweenItemString)
      displayHighlights.splice(betweenItemIndex, 1, betweenItemString);
    }


  }

  return displayHighlights;
}
