//How to find the Absolute Position -- given an element and number
absolutesStartPos = 0;
currentNode = selectedElement
1)  absolutesStartPos = anchorOffset;
2)  absolutesStartPos += currentNode.previousSiblingsLength
3)  if parentNode.id === 'p#' >> return absolutesStartPos;
    else, currentNode = parentNode >> return to step 2)


<p>Here is some text.
  <span>
    More text.
    <span>
      And more.
    </span>
    shit will be messy!   //
  </span>
  ok                      //Look for children
</p>

Look for children



function absolutesStartPos(selection) {
  // returns absolute start and end positions

  let previousSiblings = findTheSiblings(selection).previousSiblings;

  function getWholeTextLength(el){
    if (el.wholeText) {
      return el.wholeText.length
    } else if (el.childNodes.length > 0) {
      let children = el.childNodes[1];
      return children.wholeText.length;
    } else return 0;
  }

  let previousSiblingsLength = previousSiblings.map(getWholeTextLength);
  let previousTotal = previousSiblingsLength.reduce(function(sum, value) {
    return sum + value;
  }, 0);

  let startPos = select.anchorOffset + previousTotal;

  return startPos;

}
