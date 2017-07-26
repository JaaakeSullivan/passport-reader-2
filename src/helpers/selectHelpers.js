
// import { addHighlights } from './addHighlights';
// export default addHighlights;

// ======================================================= //

// ========== COMPUTE POSITION OF SELECTED AREA ========== //

export function getSelectedText(selection) {
  let selectedText = selection.toString();
  return selectedText;
}

export function getIdAndPosition(selection) {
  function sliceId(id) {
    let sliced = id.slice(3);
    return sliced;
  }

  // CALCULATE LENGTH OF ALL TEXT NODES BEFORE A SELECT OF A HIGHLIGHT
  function getLengthOfPreviousElementsHL(node) {
    let parentNode = node.parentNode;
    let length = 0;
    function lengthLoop(nodeIn){
      if (nodeIn.previousSibling.previousSibling !== null) {
        let previousNode = nodeIn.previousSibling.previousSibling;
        length += previousNode.textContent.length;
        // console.log('HLlength', length)
        lengthLoop(previousNode);
      }
    }
    lengthLoop(parentNode);
    return length;
  }

  // === CALCULATE LENGTH OF ALL TEXT NODES BEFORE A SELECT OF A TEXT NODE === //
  function getLengthOfPreviousElements(node) {
    let length = 0;
    function lengthLoop(nodeIn){
      if (nodeIn.previousElementSibling !== null) {
        let previousNode = nodeIn.previousElementSibling;
        length += previousNode.textContent.length + previousNode.previousSibling.previousSibling.textContent.length;
        // console.log('length', length)
        lengthLoop(previousNode);
      }
    }
    lengthLoop(node);
    return length;
  }

  let startId;
  let startPos;
  if (selection.anchorNode.parentNode.id.includes('hl')) {
    startId = selection.anchorNode.parentNode.parentNode.id;
    startPos = selection.anchorOffset + getLengthOfPreviousElementsHL(selection.anchorNode);
  } else {
    startId = selection.anchorNode.parentNode.id;
    startPos = selection.anchorOffset + getLengthOfPreviousElements(selection.anchorNode);
  }

  let startIdNum = Number(sliceId(startId));

  let endId;
  let endPos;
  if (selection.focusNode.parentNode.id.includes('hl')) {
    endId = selection.focusNode.parentNode.parentNode.id;
    endPos = selection.focusOffset + getLengthOfPreviousElementsHL(selection.focusNode);
  } else {
    endId = selection.focusNode.parentNode.id;
    endPos = selection.focusOffset + getLengthOfPreviousElements(selection.focusNode);
  }

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

//=== build array of ids between start and end ===//
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
