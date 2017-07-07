// ===== FIND THE PARENT ID ===== //

function findTheParent(selection) {
  console.log(selection);
  let startLevel = 0;
  let startTagId = '';
  let startPos = select.anchorOffset;
  let endLevel = 0;
  let endTagId = '';
  let endPos = select.focusOffset;

  let startElement;
  let endElement;
  let selectedArray = [];
  // === find the start === //

  function startLevelUp(current) {
    startLevel ++;
    let check = current.parentNode

    // === TODO: START HERE ON WEDNESDAY === //

    if (check.id) {
      startTagId = check.id;
      startElement = check;
    } else {
      startPos += current.length;
      startLevelUp(check)
    };
  }

  if (selection.anchorNode.id) {
    startTagId = select.anchorNode.id;
  } else startLevelUp(select.anchorNode);


  // === find the end === //

  function endLevelUp(current) {
    endLevel ++;
    let check = current.parentNode

    if (check.id) {
      endTagId = check.id;
      endElement = check;
    } else endLevelUp(check);
  }

  // check to see if selected element has an ID ... only images here
  if (selection.focusNode.id) {
    endTagId = select.focusNode.id;
  } else endLevelUp(select.focusNode);

  // ===== return array of strings to rebuild innerHTML ===== //

  // ===== BUILD ARRAY OF CONTENT TO JOIN LATER ===== //

  addHighlights(startElement, startPos, endElement, endPos);

  // ================================================================= //

  return ('*** ID: ' + startTagId + ' LEV: ' + startLevel + ' POS: ' + startPos
    + ' ==> ID: ' + endTagId + ' LEV: ' + endLevel + ' POS: ' + endPos + ' ***');

}
