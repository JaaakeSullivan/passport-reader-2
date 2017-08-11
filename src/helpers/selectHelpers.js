
// import { addHighlights } from './addHighlights';
// export default addHighlights;

// ======================================================= //


// === RETURN SELECTED TEXT === //
export function getSelectedText(selection) {
  let selectedText = selection.toString();
  return selectedText;
}

// === BUILD ARRAY OF IDS BETWEEN STARID & ENDID === //
export function getBetweenArray(selection) {
  let startIdNum = getIdAndPosition(selection).startIdNum;
  let endIdNum = getIdAndPosition(selection).endIdNum;
  let idNum = startIdNum + 1;
  let betweenIds = []
  while (endIdNum - idNum > 0) {
    betweenIds.push(`pr-${idNum}`)
    idNum++;
  }
  return betweenIds;
}

// === CHECK TO SEE IF HIGHLIGHTED AREA IS SELECTED === //
export function isHighlightSelected(idAndPosition, highlightsArray, betweenArray) {
  let { startId, endId, startPos, endPos } = idAndPosition;
  let value = false;
  let toDelete = false;
  let matchingHighlights = [];

  for (let i=0; i<highlightsArray.length; i++) {
    // BIG CHECK FOR MATCHES ... BUILD ARRAY //
    let highlight = highlightsArray[i];

    // 1) CHECK FOR STARTID INSIDE ANOTHER HIGHLIGHT
    function isStartInHighlight() {
      if  (
            ((startId === highlight.startId) && (startPos >= highlight.startPos && startPos < highlight.endPos)) ||
            ((startId === highlight.endId) && (startPos > highlight.startPos && startPos < highlight.endPos))
          ) {
            // console.log('check1');
            return true;
          }
    }

    // 2) CHECK FOR ENDID INSIDE ANOTHER HIGHLIGHT //
    function isEndInHighlight() {
      if (
          ((endId === highlight.endId) && (endPos <= highlight.endPos && endPos > highlight.startPos)) ||
          ((endId === highlight.startId) && (endPos < highlight.endPos && endPos > highlight.startPos))
        ) {
        // console.log('check2');
        return true;
      }
    }

    // 3) CHECK FOR STARTID OR ENDID IN HIGHLIGHTED BETWEEN ARRAY //
    function startOrEndInBetweenArray() {
      if (highlight.betweenArray.length > 0) {
        for (let j=0; j<highlight.betweenArray.length; j++) {
          if (startId === highlight.betweenArray[j] || endId === highlight.betweenArray[j]) {
            // console.log('check3');
            return true
          }
        }
      }
    }

    // 4) CHECK FOR WRAPPING AN EXISTING HIGHLIGHT WITH EMPTY BETWEENARRAY
    function doesSelectSurroundHighlight() {
      if (
          // SELECT WITHIN IN SAME ELEMENT AS HIGHLIGHT
          (
            (startId === highlight.startId && endId === highlight.endId) &&
            (startPos <= highlight.startPos && endPos >= highlight.endPos)
          ) ||
          // SELECT ID ENDS AFTER HIGHLIGHT
          (
            startId === highlight.startId &&
            startPos < highlight.startPos &&
            parseInt(sliceId(endId)) > parseInt(sliceId(highlight.startId))
          ) ||
          // SELECT ID STARTS ENDS BEFORE HIGHLIGHT
          (
            endId === highlight.endId &&
            endPos > highlight.endPos &&
            parseInt(sliceId(startId)) < parseInt(sliceId(highlight.endId))
          ) ||
          (
            parseInt(sliceId(startId)) < parseInt(sliceId(highlight.startId)) &&
            parseInt(sliceId(endId)) > parseInt(sliceId(highlight.endId))
          )
        )
          {
            // console.log('check4');
            return true
          }
    }

    if (isStartInHighlight() ||
        isEndInHighlight() ||
        startOrEndInBetweenArray() ||
        doesSelectSurroundHighlight()
        //checkSelectedBetweenArrays()
       )
      {
        value = true;
        toDelete = true;
        matchingHighlights.push(highlight._id)
      }
  }



  // let cleanMatchingHighlights = [];
  // for (let l=0; l<matchingHighlights.length; l++) {
  //   if (!cleanMatchingHighlights.includes(matchingHighlights[l])) {
  //     cleanMatchingHighlights.push(matchingHighlights[l]);
  //   }
  // }

  return { value: value, toDelete: toDelete, matches: matchingHighlights }
}

// === REMOVE 'PR-' FROM ID TO CHECK FOR ASIDE CONTENT === //
export function sliceId(id) {
  // TODO: figure out why this errors out after 10 highlights
  // console.log('homeslice', id)
  let sliced = id.slice(3);
  // console.log('slided', sliced)
  return sliced;
}

// ========== COMPUTE POSITION OF SELECTED AREA ========== //

export function getIdAndPosition(selection) {

  // CALCULATE LENGTH OF ALL TEXT NODES BEFORE A SELECT OF A HIGHLIGHT
  function getLengthOfPreviousNodes(node) {
    let length = 0;
    let nodeToCheck = node;

    function lengthLoop(nodeIn){
      if (nodeIn.previousSibling !== null) {
        let previousNode = nodeIn.previousSibling;
        if (previousNode.nodeName !== '#comment') {
          length += previousNode.textContent.length;
        }
        lengthLoop(previousNode);
      }
    }

    if (node.parentNode.id.includes('hl')) {
      nodeToCheck = node.parentNode;
    }

    lengthLoop(nodeToCheck);
    return length;
  }
  // ===== END OF LENGTH CALCULATION

  let startId, startPos;
  if (selection.anchorNode.parentNode.id.includes('hl')) {
    startId = selection.anchorNode.parentNode.parentNode.id;
  } else {
    startId = selection.anchorNode.parentNode.id;
  }
  startPos = selection.anchorOffset + getLengthOfPreviousNodes(selection.anchorNode);
  let startIdNum = Number(sliceId(startId));

  let endId, endPos;
  if (selection.focusNode.parentNode.id.includes('hl')) {
    endId = selection.focusNode.parentNode.parentNode.id;
    //endPos = selection.focusOffset + getLengthOfPreviousElementsHL(selection.focusNode);
  } else {
    endId = selection.focusNode.parentNode.id;
    //endPos = selection.focusOffset + getLengthOfPreviousElements(selection.focusNode);
  }

  endPos = selection.focusOffset + getLengthOfPreviousNodes(selection.focusNode);
  let endIdNum = Number(sliceId(endId));

  // console.log('startId', startId, 'endId', endId, 'startIdNum', startIdNum, 'endIdNum', endIdNum);

  // === SWAP START AND END VALUES IF HIGHLIGHTED BACKWARDS ===//
  if ((startIdNum > endIdNum) || (startId === endId && endPos < startPos))  {
    let tempId = endId, tempPos = endPos, tempIdNum = endIdNum;
    endId = startId;
    endPos = startPos;
    endIdNum = startIdNum;
    startId = tempId;
    startPos = tempPos;
    startIdNum = tempIdNum
  }

  // //=== build between array if necessary ===//
  // if (endIdNum - startIdNum > 1) {
  //   console.log('betweenIds: ', buildBetweenArray(startIdNum, endIdNum))
  // } else console.log ('no Ids between start and end points')

  return {startId, startPos, endId, endPos, startIdNum, endIdNum};
}
