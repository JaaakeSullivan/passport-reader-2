
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

  let startId = selection.anchorNode.parentNode.id;
  let startPos = selection.anchorOffset;
  let startIdNum = Number(sliceId(startId));
  let endId = selection.focusNode.parentNode.id;
  let endPos = selection.focusOffset;
  let endIdNum = Number(sliceId(endId));

  //=== swap start and end values if highlighted backwards ===//
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